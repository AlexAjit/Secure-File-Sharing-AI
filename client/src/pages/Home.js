import React from 'react';
import { useSelector } from 'react-redux';
import FileCard from '../components/File/FileCard';

function Home() {
  const { files } = useSelector((state) => state.file);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-blue text-3xl mb-4">Welcome to Secure File Sharing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {files.map(file => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}

export default Home;