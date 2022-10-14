import React from 'react'
// import Img
import user1 from '../../../assets/img/user/user1.png'
import user2 from '../../../assets/img/user/user2.png'
import user3 from '../../../assets/img/user/user3.png'

const ReviewData = [
    {
        img: user1,
        name: "Sara Anela",
        date: "5 days ago",
        replay: "Replay",
        report: "Report",
        para: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor.`
    },
    {
        img: user2,
        name: "Sara Anela",
        date: "5 days ago",
        replay: "Replay",
        report: "Report",
        para: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor.`
    },
    {
        img: user3,
        name: "Sara Anela",
        date: "5 days ago",
        replay: "Replay",
        report: "Report",
        para: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor.`
    },

]

const ProductInfo = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="product_details_tabs">
                        <ul className="nav nav-tabs">
                            <li><a data-toggle="tab" href="#description" className="active">Description</a></li>
                            <li><a data-toggle="tab" href="#additional">Additional Information</a></li>
                            <li><a data-toggle="tab" href="#review">Review</a></li>
                        </ul>
                        <div className="tab-content">
                            <div id="description" className="tab-pane fade in show active">
                                <div className="product_description">
                                    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure.</p>
                                    <ul>
                                        <li>At vero eos et accusamus et iusto odio dignissimos du</li>
                                        <li>laborum et dolorum fuga. Et harum quidem rerum facilis est et</li>
                                        <li>Temporibus autem quibusdam et aut officiis debitis aut rerum nece </li>
                                    </ul>
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                                    </p>
                                </div>
                            </div>
                            <div id="additional" className="tab-pane fade">
                                <div className="product_additional">
                                    <ul>
                                        <li>Weight: <span>500 KG</span></li>
                                        <li>Dimensions: <span>2.5 x 10 x 15 M</span></li>
                                        <li>Materials: <span> 80% cotton, 20% polyester</span></li>
                                        <li>Other Info: <span> American heirloom jean shorts pug seitan
                                            letterpress</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="review" className="tab-pane fade">
                                <div className="product_reviews">
                                    <ul>
                                        {ReviewData.map((data, index) => (
                                            <li className="media" key={index}>
                                                <div className="media-img">
                                                    <img src={data.img} alt="img" />
                                                </div>
                                                <div className="media-body">
                                                    <div className="media-header">
                                                        <div className="media-name">
                                                            <h4>{data.name}</h4>
                                                            <p>{data.date}</p>
                                                        </div>
                                                        <div className="post-share">
                                                            <a href="#!" className="replay">{data.replay}</a>
                                                            <a href="#!" className="">{data.report}</a>
                                                        </div>
                                                    </div>
                                                    <div className="media-pragraph">
                                                        <div className="product_review_strat">
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                            <span><a href="#!"><i className="fa fa-star"></i></a></span>
                                                        </div>
                                                        <p>{data.para}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo