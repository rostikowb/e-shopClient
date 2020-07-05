// import React, {Component} from 'react';
// import option from './../../option'
// // import rp from "request-promise-any";
// import './news.css'
// import {Lines} from "react-preloaders";
// import {
//     FacebookShareButton,
//     TwitterShareButton,
//     TelegramShareButton,
//     WhatsappShareButton,
//     ViberShareButton,
// } from 'react-share';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {
//     faFacebookSquare,
//     faTwitterSquare,
//     faTelegramPlane,
//     faWhatsappSquare,
//     faViber
// } from '@fortawesome/free-brands-svg-icons'
// import moment from "moment/min/moment-with-locales.min";
//
//
// class NewsPage extends Component {
//
//     state = {
//         content: null,
//         loading: true,
//         href: this.props.history.location.pathname,
//         download: false
//     };
//
//     componentDidMount() {
//         window.scrollTo(0, document.body.scrollHeight);
//
//         let local = JSON.parse(localStorage.getItem('posts'));
//         let id = this.state.href.split('/')[2];
//         let title;
//         let date;
//         let content;
//
//         try {
//             title = document.querySelectorAll('meta[name=title]')[0].attributes.content.value;
//             date = Number(document.querySelectorAll('meta[name=date]')[0].attributes.content.value);
//             content = document.getElementById('craulerContent').innerHTML;
//         } catch (e) {
//             console.log(e);
//
//         }
//
//         try {
//             if (title && date && content) {
//                 console.log('ssr');
//                 let obj = {
//                     title: title,
//                     date: date,
//                     content: content
//                 };
//                 this.renderNews(obj);
//             } else {
//                 if (local[id]) {
//                     console.log('local');
//                     this.renderNews(local[id])
//                 } else {
//                     console.log('else');
//                     if (!/.+\..+/.test(id)) {
//                         this.getNewstoSerwer(id)
//                     } else {
//                         this.props.history.push(id + '/404');
//                     }
//                 }
//             }
//         } catch (e) {
//             console.log(e);
//             this.getNewstoSerwer(id)
//         }
//     }
//
//     // async saveNewsToLocalStorage(obj) {
//     //     let id = this.state.href;
//     //     let local;
//     //
//     //     local = localStorage.getItem('posts');
//     //     local ? local = JSON.parse(local) : local = {};
//     //
//     //
//     //     try {
//     //         if (id !== local[id]['_id']) {
//     //             console.log(id + '+++' + local[id]);
//     //             local[id] = item;
//     //         }
//     //     }catch (e) {
//     //         localStorage.setItem('posts', JSON.stringify(local));
//     //     }
//     //
//     // }
//
//     getNewstoSerwer(id) {
//         console.log('online');
//         this.setState({download: true});
//         // const options = {
//         //     method: 'GET',
//         //     uri: option.api + this.state.href,
//         //     json: true
//         // };
//         // rp(options).then(res => {
//         //     this.renderNews(res)
//         // }).catch(err => {
//         //     if (err.statusCode === 404) {
//         //         this.props.history.push(id + '/404');
//         //     } else {
//         //         this.props.history.push(id + '/500');
//         //     }
//         // })
//     }
//
//     renderNews(res) {
//         let content;
//         let img;
//         if (typeof(res.content) === "string") {
//             content = new DOMParser().parseFromString(res.content, 'text/html').getElementsByTagName('body')[0].innerHTML;
//             img = res.content.match(/.+ src="(.+)" alt/)[1];
//         } else {
//             content = res.content;
//         }
//
//         this.setState({
//             content: content,
//             title: res.title,
//             date: moment(+res.date).format('LL'),
//             img: img,
//             loading: false,
//         });
//     }
//
//     render() {
//         return (
//             <div className="mainWrapper mainNews">
//                 <div className="wrapperNews">
//                     <div className="top">
//                         <h1>
//                             {this.state.title}
//                         </h1>
//                         <div className="date">
//                             <span>Опубліковано: </span>{this.state.date}
//                         </div>
//                     </div>
//
//                     <div dangerouslySetInnerHTML={{__html: this.state.content}} className="content"/>
//                 </div>
//
//                 <b>Не Бажаєте поширити статтю?</b>
//                 <div className="socBtn">
//                     <FacebookShareButton url={"https://poap.pl.ua" + this.state.href}><FontAwesomeIcon
//                         className="faFacebookSquare"
//                         icon={faFacebookSquare}/></FacebookShareButton>
//                     <ViberShareButton title={this.state.title}><FontAwesomeIcon className="faViber"
//                                                                                 icon={faViber}/></ViberShareButton>
//                     <TelegramShareButton title={this.state.title}><FontAwesomeIcon className="faTelegramPlane"
//                                                                                    icon={faTelegramPlane}/></TelegramShareButton>
//                     <WhatsappShareButton title={this.state.title}><FontAwesomeIcon className="faWhatsappSquare"
//                                                                                    icon={faWhatsappSquare}/></WhatsappShareButton>
//                     <TwitterShareButton title={this.state.title}><FontAwesomeIcon className="faTwitterSquare"
//                                                                                   icon={faTwitterSquare}/></TwitterShareButton>
//                 </div>
//
//                 {this.state.download ? <Lines customLoading={this.state.loading}/> : null}
//             </div>
//         )
//     }
// }
//
// export default NewsPage;