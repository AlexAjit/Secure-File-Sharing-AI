import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FileUploadForm from '../components/File/FileUploadForm';
import FileCard from '../components/File/FileCard';
import { fetchFiles } from '../features/fileSlice';

function Dashboard() {
  const { files } = useSelector(state => state.file);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-blue text-3xl mb-4">Dashboard</h1> */}
      <FileUploadForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {files.map(file => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;