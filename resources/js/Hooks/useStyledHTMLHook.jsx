import React from 'react';
import HTMLReactParser from 'html-react-parser';

const useStyledHTMLHook = (htmlContent) => {
  const addClasses = (node) => {
    if (node.type === 'tag') {
      switch (node.name) {
        case 'h1':
          node.attribs.className = 'text-h1';
          break;
        case 'h2':
          node.attribs.className = 'text-h2';
          break;
        case 'h3':
          node.attribs.className = 'text-h3';
          break;
        case 'p':
          node.attribs.className = 'text-body mb-1';
          break;
        case 'a':
          node.attribs.className = 'text-link';
          break;
        case 'ol':
          const orderedItems = node.children.filter(
            (child) =>
              child.name === 'li' && child.attribs['data-list'] === 'ordered'
          );
          if (orderedItems.length > 0) {
            node.attribs.className = 'list-decimal pl-6 mb-2';
          }
          const bulletItems = node.children.filter(
            (child) =>
              child.name === 'li' && child.attribs['data-list'] === 'bullet'
          );
          if (bulletItems.length > 0) {
            node.attribs.className = 'list-disc pl-6 mb-2';
          }
          break;
        case 'img':
          // Jika ingin menambahkan class khusus untuk tag img, Anda dapat melakukannya di sini
          // node.attribs.className = 'custom-img-class';
          // Jika hanya ingin menutup tag img tanpa menambahkan class, cukup return node saja
          return node;
        default:
          break;
      }
    }
    return node;
  };

  const parseStyledHTML = () => {
    if (!htmlContent || typeof htmlContent !== 'string') {
      return null;
    }
    
    return HTMLReactParser(htmlContent, {
      replace: addClasses,
    });
  };

  return { parseStyledHTML };
};

export default useStyledHTMLHook;
