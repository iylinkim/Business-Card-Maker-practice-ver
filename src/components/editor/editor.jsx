import React from 'react';

const Editor = (props) => (
      <form>
        <input type="text"/>
        <input type="text"/>
        <select>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="colorful">Colorful</option>
        </select>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
      </form>     
    );

export default Editor;