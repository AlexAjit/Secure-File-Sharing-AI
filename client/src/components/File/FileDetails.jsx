import React from 'react';
import { useSelector } from 'react-redux';

function FileDetails({ fileId }) {
  const file = useSelector(state => state.file.files.find(f => f.id === fileId));

  if (!file) return <div>File not found</div>;

  return (
    <div className="max-w-lg mx-auto bg-white text-black p-4 rounded-lg">
      <h2 className="text-blue mb-4">{file.name}</h2>
      <p>Size: {file.size}</p>
      <p>Uploaded: {new Date(file.uploaded_at).toLocaleString()}</p>
      <button className="mt-4 bg-blue text-white px-3 py-1 rounded">Download</button>
    </div>
  );
}

export default FileDetails;