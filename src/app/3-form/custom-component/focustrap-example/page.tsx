'use client';
import { useState, ChangeEvent, KeyboardEvent } from 'react';

const TabTextarea: React.FC = () => {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.currentTarget;
      const newValue =
        value.substring(0, selectionStart) +
        '\t' +
        value.substring(selectionEnd);
      setValue(newValue);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <h4>フォーカストラップ-Tab入力できるテキストエリア-</h4>
      <textarea
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        rows={10}
        cols={50}
      />
      <br />
      <textarea
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        rows={10}
        cols={50}
      />
    </>
  );
};

export default TabTextarea;
