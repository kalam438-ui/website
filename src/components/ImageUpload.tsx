import React, { useState } from 'react';
import { Upload, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setUploadSuccess(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!selectedImage) return;
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
    }, 2000);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setUploadSuccess(false);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Upload Your Design Ideas</h3>
      <p className="text-sm text-gray-500 mb-6">Share your inspiration with us for a custom quote.</p>
      
      <div className="space-y-4">
        {!selectedImage ? (
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-emerald-300 rounded-xl cursor-pointer bg-emerald-50/30 hover:bg-emerald-50 transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-12 h-12 text-emerald-500 mb-3" />
              <p className="mb-2 text-sm text-gray-700 font-semibold">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 800x400px)</p>
            </div>
            <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
          </label>
        ) : (
          <div className="relative">
            <img src={selectedImage} alt="Preview" className="w-full h-64 object-cover rounded-xl" />
            <button 
              onClick={clearImage}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedImage && !uploadSuccess && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={handleUpload}
              disabled={isUploading}
              className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isUploading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Uploading...
                </>
              ) : (
                'Send to AK Decor'
              )}
            </motion.button>
          )}

          {uploadSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 p-3 bg-emerald-100 text-emerald-700 rounded-xl font-semibold"
            >
              <CheckCircle className="w-5 h-5" />
              Upload Successful! We'll contact you soon.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
