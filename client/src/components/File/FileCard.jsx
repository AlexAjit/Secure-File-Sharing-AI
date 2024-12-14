import React from 'react';

function FileCard({ file }) {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
      <h3 className="text-blue mb-2">{file.name}</h3>
      <p className="text-sm text-gray-600">Size: {file.size}</p>
      <p className="text-sm text-gray-600">Uploaded: {new Date(file.uploaded_at).toLocaleString()}</p>
      <button className="mt-2 bg-blue text-white px-3 py-1 rounded">Download</button>
    </div>
  );
}

export default FileCard;