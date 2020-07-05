// import React, {Component} from 'react';
// // import rp from "request-promise-any";
// import {Editor} from 'react-draft-wysiwyg';
// import {EditorState, convertToRaw} from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import FormData from "form-data";
//
//
// import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import './addNewsPage.css'
// import option from "../../../../option";
//
//
//
//
// class AddNews extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: null,
//             short: null,
//             editorState: EditorState.createEmpty(),
//             key: null,
//             date: null,
//             result: null,
//             resultMsg: null,
//         };
//     }
//
//     state = {};
//
//     componentDidMount(){
//
//     }
//
//     uploadImageCallBack(file) {
//         // console.log(option.api + '/news/uploadFile');
//         return new Promise(
//             (resolve, reject) => {
//                 const token = JSON.parse(localStorage.getItem('token')).token;
//                 const xhr = new XMLHttpRequest();
//                 xhr.open('POST', option.api + '/news/uploadFile');
//                 xhr.setRequestHeader('Authorization', 'Beaer ' + token);
//                 const data = new FormData();
//                 data.append('image', file);
//                 xhr.send(data);
//                 xhr.addEventListener('load', () => {
//                     const response = JSON.parse(xhr.responseText);
//                     resolve(response);
//                 });
//                 xhr.addEventListener('error', () => {
//                     const error = JSON.parse(xhr.responseText);
//                     reject(error);
//                 });
//             }
//         );
//     }
//
//     sendToServer() {
//
//         let title = this.state.title;
//         let content = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
//         let short = this.state.short;
//         // let date = moment().format('LL');
//         let date = Date.now();
//         let key = this.state.key;
//         let img = content.search(/.+ src=".+" alt/) !== -1;
//
//
//             if (title && content && short && key && img) {
//                 const options = {
//                     method: 'POST',
//                     uri: option.api + '/news',
//                     headers: {
//                         'Authorization': 'Beaer ' + localStorage.getItem('token')
//                     },
//                     body: {
//                         title: title,
//                         short: short,
//                         content: content,
//                         date: date,
//                         key: key,
//                     },
//                     json: true
//                 };
//
//                 // rp(options).then(res => {
//                 //     this.setState({resultMsg: 'Успішно!'});
//                 //     this.setState({result: true});
//                 // }).catch(err => {
//                 //     if (err.statusCode === 409) {
//                 //         this.setState({resultMsg: 'Новина з такою назвою вже є!'});
//                 //         this.setState({result: false});
//                 //     } else {
//                 //         this.setState({resultMsg: 'Виникла проблема!'});
//                 //         this.setState({result: false});
//                 //     }
//                 //     console.log(err);
//
//                 // });
//             } else {
//                 this.setState({resultMsg: 'Заповніть всі поля перед відправкою, або додайте фото!'});
//                 this.setState({result: false});
//             }
//
//
//     }
//
//     handleTitleChange(e) {
//         this.setState({title: e.target.value})
//     }
//
//     handleShortChange(e) {
//         this.setState({short: e.target.value});
//     }
//
//     handleKeyChange(e) {
//         this.setState({key: e.target.value})
//     }
//
//     onEditorStateChange = (editorState) => {
//         this.setState({
//             editorState,
//         });
//     };
//
//     render() {
//         const {editorState} = this.state;
//         return (
//             <div className="mainWrapper editorWrapper">
//                 <span
//                     className={this.state.result ? 'addNewsPageSendResultTrue' : 'addNewsPageSendResultFalse'}>{this.state.resultMsg}</span>
//                 <div className="mainInputsBox">
//                     <h3>Заголовок</h3>
//                     <input maxLength={65} type="text" name="title" value={this.state.title}
//                            onChange={e => this.handleTitleChange(e)}/>
//
//                     <h3>Коротко</h3>
//                     <textarea name="short" id="" cols="30" rows="10" maxLength={200}
//                               onChange={e => this.handleShortChange(e)}>
//                     {this.state.short}
//                 </textarea>
//                     <h3>Увесь текст</h3>
//                     <div className="editorBox">
//                         <Editor
//                             editorState={editorState}
//                             wrapperClassName="demo-wrapper"
//                             editorClassName="demo-editor"
//                             onEditorStateChange={this.onEditorStateChange}
//                             toolbar={{
//                                 inline: {inDropdown: true},
//                                 list: {inDropdown: true},
//                                 textAlign: {inDropdown: true},
//                                 link: {inDropdown: true},
//                                 history: {inDropdown: true},
//                                 image: {
//                                     uploadCallback: this.uploadImageCallBack,
//                                     alt: {present: true, mandatory: true}
//                                 },
//                             }}
//                         />
//                     </div>
//                     <h3>Ключові слова(через кому, без пробілів)</h3>
//                     <input type="text" name="key" value={this.state.key}
//                            onChange={e => this.handleKeyChange(e)}/>
//
//                     <button className="btnType2" onClick={() => this.sendToServer()}>Відправити</button>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default AddNews;