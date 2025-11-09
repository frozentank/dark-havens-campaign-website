import React, { useState } from 'react';
import { uploadFeats } from '../utils/uploadFeats';

export default function SetupFeats() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    setUploading(true);
    setMessage('');
    try {
      await uploadFeats();
      setMessage('Feats uploaded successfully!');
    } catch (error) {
      setMessage('Error uploading feats: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 p-8 rounded-lg border border-slate-600 max-w-md">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">Setup Feats Database</h2>
        <p className="text-slate-300 mb-6">
          Click the button below to upload all D&D 5e feats to Firestore. 
          This only needs to be done once.
        </p>
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors disabled:bg-slate-700"
        >
          {uploading ? 'Uploading...' : 'Upload Feats'}
        </button>
        {message && (
          <div className={`mt-4 p-3 rounded ${
            message.includes('success') 
              ? 'bg-green-900 text-green-200' 
              : 'bg-red-900 text-red-200'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}