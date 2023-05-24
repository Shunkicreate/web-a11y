import React from 'react';

const AgreeCheckbox: React.FC = () => {
  return (
    <label>
      <input type="checkbox" checked />
      <span className="Checkbox__wrapper">
        <svg viewBox="0 0 512 512" width="14">
          <path fill="#0770c7" d="（省略）" />
        </svg>
      </span>
      同意する
    </label>
  );
};

export default AgreeCheckbox;