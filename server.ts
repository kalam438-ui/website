import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for JSON and large payloads
  app.use(express.json({ limit: '10mb' }));

  // Ensure uploads directory exists
  const uploadsDir = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  // API Route for uploading images
  app.post('/api/upload', (req, res) => {
    const { image, name } = req.body;
    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }

    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const fileName = `${Date.now()}-${name || 'design'}.png`;
    const filePath = path.join(uploadsDir, fileName);

    fs.writeFile(filePath, buffer, (err) => {
      if (err) {
        console.error('Error saving file:', err);
        return res.status(500).json({ error: 'Failed to save image' });
      }
      res.json({ success: true, fileName });
    });
  });

  // API Route for getting all uploaded images
  app.get('/api/images', (req, res) => {
    fs.readdir(uploadsDir, (err, files) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read uploads' });
      }
      const images = files.filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file));
      res.json(images.map(img => `/uploads/${img}`));
    });
  });

  // Serve uploaded images
  app.use('/uploads', express.static(uploadsDir));

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
