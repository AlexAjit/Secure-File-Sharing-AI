import React from 'react';
import { useParams } from 'react-router-dom';
import FileDetails from '../components/File/FileDetails';

function FileDetailsPage() {
  const { fileId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <FileDetails fileId={fileId} />
    </div>
  );
}

export default FileDetailsPage;