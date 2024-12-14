import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFile } from '../../features/fileSlice';
import { encryptFile } from '../../utils/crypto';

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const encryptedFile = await encryptFile(file, 'password'); // Here, 'password' should be dynamically provided or managed
      await dispatch(uploadFile(encryptedFile, file.name));
      setFile(null); // Reset file input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-blue mb-2" htmlFor="file">Select File</label>
        <input type="file" id="file" onChange={handleFileChange} className="w-full" />
      </div>
      <button type="submit" className="w-full bg-blue text-white py-2 rounded-lg">Upload</button>
    </form>
  );
}

export default FileUploadForm;