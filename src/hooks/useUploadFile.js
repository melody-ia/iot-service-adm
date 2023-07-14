import { useState } from "react";

export function useUploadFile(type, size, length) {
  const [fileData, setFileData] = useState([]);
  const [letter, setLetter] = useState();

  const uploadFile = e => {
    let copy = [...fileData];
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const url = URL.createObjectURL(file);
      if (type && !type.includes(file.type.split("/")[1])) {
        return alert(`${type.join(",")} 형식의 파일만 업로드 할 수 있습니다.`);
      }
      if (size && file.size > size * 1024000) {
        return alert(`하나의 파일당 ${size}MB까지 첨부 할 수 있습니다.`);
      }
      if (length && copy.length >= 3) {
        return alert(`파일은 최대 ${length}개까지 첨부 할 수 있습니다.`);
      }
      if (length === 1) {
        return setFileData([{ file, url }]);
      }
      copy.push({ file, url });
    }
    setFileData(copy);
  };

  const deleteFile = e => {
    let copy = [...fileData];
    const deleteIndex = copy.findIndex(el => el.url == e.target.dataset.url);
    copy.splice(deleteIndex, 1);
    setFileData(copy);
  };

  const writing = e => {
    setLetter(e.target.value);
  };
  return { fileData, setFileData, letter, uploadFile, deleteFile, writing };
}
