import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Note: React.FC = () => {
  const [text, setText] = useState<string>('');

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'size': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'color', 'background', 'align',
  ];

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md w-full h-4/6 mx-auto bg-white mb-5">
      <ReactQuill 
        className='h-4/5'
        theme="snow"
        value={text}
        onChange={setText}
        modules={modules}
        formats={formats}
        placeholder="Type your note here..."
      />
    </div>
  );
};

export default Note;
