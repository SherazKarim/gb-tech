import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Sdata from "./Data"
import './price.css';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import certificate from './images/Group 61.png';
import { HashLink } from "react-router-hash-link";


export default function PricesDetails() {
    const { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        setData(Sdata.find(data => data.id === +id))
        console.log("id", id)
    })
    console.log("data:", data)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="mt-5 pt-5">
                        <div className="text-center details-para">
                            <h2 className="detail-headings">{data?.heading}</h2>
                            <h3 className="detail-headings-h3">{data?.subPrices.subHeading}</h3>
                            <p className="">{data?.subPrices.subPara}</p>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-12 d-flex justify-content-center align-items-center align-content-center my-3">
                                    <div id="offer" class="card-box price-card price-card-active w-75 d-flex flex-column justify-content-center align-items-center align-content-center">
                                        <div className="box-border text-center details-para">
                                            <div className="row top-bar">
                                                <div className="certificate">
                                                    <img className="certificate-img" src={certificate}></img>
                                                </div>
                                                <h4 className="mt-3 mb-3">Top Bar Hive</h4>
                                            </div>
                                            <div className="px-3">
                                                <h5>{data?.subPrices.topBarHive.dollar}</h5>
                                                <p>{data?.subPrices.topBarHive.para1}</p>
                                                <p>{data?.subPrices.topBarHive.para2}</p>
                                            </div>
                                            <HashLink><NavLink to="/#contact"><Button className="btn-prices mb-3">Order Now</Button></NavLink></HashLink>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12 d-flex justify-content-center align-items-center align-content-center my-3">
                                    <div id="offer" class="card-box price-card price-card-active w-75 d-flex flex-column justify-content-center align-items-center align-content-center">
                                        <div className="box-border text-center details-para">
                                            <div className="row top-bar">
                                                <div className="certificate">
                                                    <img className="certificate-img" src={certificate}></img>
                                                </div>
                                                <h4 className="mt-3 mb-3">Ware Hive</h4>
                                            </div>
                                            <div className="px-3">
                                                <h5>{data?.subPrices.WarreHive.dollar}</h5>
                                                <p>{data?.subPrices.WarreHive.para1}</p>
                                                <p>{data?.subPrices.WarreHive.para2}</p>
                                            </div>
                                            <HashLink><NavLink to="/#contact"><Button className="btn-prices mb-3">Order Now</Button></NavLink></HashLink>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12 d-flex justify-content-center align-items-center align-content-center my-3">
                                    <div id="offer" class="card-box price-card price-card-active w-75 d-flex flex-column justify-content-center align-items-center align-content-center">
                                        <div className="box-border text-center details-para">
                                            <div className="row top-bar">
                                                <div className="certificate">
                                                    <img className="certificate-img" src={certificate}></img>
                                                </div>
                                                <h4 className="mt-3 mb-3">Langstroth Hive</h4>
                                            </div>
                                            <div className="px-3">
                                                <h5>{data?.subPrices.LongHive.dollar}</h5>
                                                <p>{data?.subPrices.LongHive.para1}</p>
                                                <p>{data?.subPrices.LongHive.para2}</p>
                                            </div>
                                            <HashLink><NavLink to="/#contact"><Button className="btn-prices mb-3">Order Now</Button></NavLink></HashLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
// 71501-8886156-3