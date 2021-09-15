// import React, {useRef} from 'react'
//
// const FileLoader = ({selectedFile, onFileSelectError, onFileSelectSuccess}) => {
// 	const fileInput = useRef(null)
//
// 	const handleFileInput = (e) => {
// 		// handle validations
// 		const file = e.target.files[0];
// 		if (file.size > 1024)
// 			onFileSelectError({ error: "File size cannot exceed more than 1MB" });
// 		else onFileSelectSuccess(file);
// 	}
//
// 	console.log(selectedFile)
//
// 	return (
// 		<>
// 			<input
// 				id="file-input"
// 				type="file"
// 				name="file"
// 				multiple
// 				value={selectedFile}
// 				onChange={handleFileInput}
// 			/>
// 			<label htmlFor="file-input" onClick={e => fileInput.current && fileInput.current.click()}>
// 				<img src="/image/paperclip.svg" alt="paper"/>
// 				&ensp;Прикрепить ТЗ
// 			</label>
// 		</>
// )
// }
//
// export default FileLoader;