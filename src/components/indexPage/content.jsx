import React, {Component} from 'react';
// import option from './../../option'
// import ReactPaginate from 'react-paginate';
// // import rp from 'request-promise-any'
// import RecipeReviewCard from './article/article'
import './content.css'
import moment from "moment/min/moment-with-locales.min";

moment.locale("uk");
// import {Lines} from "react-preloaders";
// const RecipeReviewCard = React.lazy(() => import('./article/article'));

class Content extends Component {

    // state = {
    //     posts: [],
    //     postsData: [],
    //     loading: true,
    //     postSix: [],
    //     // postSort: [],
    // };

    // componentDidMount() {
    //     Content.requestToApi().then(res => {
    //         this.renderPosts(res);
    //         this.savePostsToLocalStorage().then().catch(err => console.log(err));
    //
    //     }).catch(() => {
    //         const res = JSON.parse(localStorage.getItem('posts'));
    //         const sort = Content.sorting(res);
    //         let sortLength = sort.length;
    //         let resNew = [];
    //         let i = 6;
    //         let u = 0;
    //
    //         while(sortLength-- && i--){
    //             resNew.push(res[sort[u][0]]);
    //             u++;
    //         }
    //         this.renderPosts(resNew);
    //     })
    //
    //
    // }

    // static sorting(obj) {
    //
    //     let sortArr = [];
    //
    //     for (let key in obj) {
    //         sortArr.push([key, obj[key]['date']]);
    //     }
    //
    //     sortArr.sort(function (a, b) {
    //         return a[1] - b[1];
    //     });
    //
    //     return sortArr;
    // }

    // async savePostsToLocalStorage() {
    //     let posts = this.state.postsData;
    //     let local;
    //
    //     local = localStorage.getItem('posts');
    //     local ? local = JSON.parse(local) : local = {};
    //
    //     if (posts.length) {
    //         posts.map(item => {
    //             let id = item['_id'];
    //             try {
    //                 if (id !== local[id]['_id']) {
    //                     console.log(id + '+++' + local[id]);
    //                     local[id] = item;
    //                 }
    //             } catch (e) {
    //                 local[id] = item;
    //             }
    //         });
    //         localStorage.setItem('posts', JSON.stringify(local));
    //     }
    // }

    // static async requestToApi() {
    //     const options = {
    //         method: 'POST',
    //         uri: option.api,
    //         body: {
    //             skip: 0
    //         },
    //         json: true
    //     };
    //     // return await rp(options);
    // }


    render() {

        return (
            <div className="mainWrapper wrapperContent">
                {/*<img className='mainImg' src="./5.webp" alt="Зображення на головній сторінці"/>*/}
                {/*<div className="grid-container">*/}
                    {/*/!*<div className="suspense"><img src={loader} alt="loader"/></div>*!/*/}
                    {/*{this.state.posts}*/}

                    {/*/!*<Lines customLoading={this.state.loading} />*!/*/}
                {/*</div>*/}
                {/*<div className="commentBox">*/}
                    {/*<ReactPaginate*/}
                        {/*previousLabel={'Назад'}*/}
                        {/*nextLabel={'Вперед'}*/}
                        {/*breakLabel={'...'}*/}
                        {/*breakClassName={'break-me'}*/}
                        {/*pageCount={1}*/}
                        {/*marginPagesDisplayed={2}*/}
                        {/*pageRangeDisplayed={5}*/}
                        {/*// onPageChange={this.handlePageClick}*/}
                        {/*previousLinkClassName={'previousButt'}*/}
                        {/*nextLinkClassName={'nextButt'}*/}
                        {/*disabledClassName={'disableButt'}*/}
                        {/*containerClassName={'pagination'}*/}
                        {/*subContainerClassName={'pages pagination'}*/}
                        {/*activeClassName={'active'}*/}
                    {/*/>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Content;