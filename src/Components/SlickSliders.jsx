import React, { Component } from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { RelateGamesCard } from './AllCards'

export default class RelatedGamesSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <RelateGamesCard
              gamename="Spin Game"
              img="https://i.postimg.cc/h4TxG75J/CAsino-3.png"
            />
          </div>
          <div>
            <RelateGamesCard
              gamename="Casino Game"
              img="https://i.postimg.cc/43X7n8jn/CAsino-4.png"
            />
          </div>
          <div>
            <RelateGamesCard
              gamename="Card Game"
              img="https://i.postimg.cc/Y0tMzVfm/CAsino-5.png"
            />
          </div>
          <div>
            <RelateGamesCard
              gamename="Casino Game"
              img="https://i.postimg.cc/43X7n8jn/CAsino-4.png"
            />
          </div>
          <div>
            <RelateGamesCard
              gamename="Spin Game"
              img="https://i.postimg.cc/h4TxG75J/CAsino-3.png"
            />
          </div>
          <div>
            <RelateGamesCard
              gamename="Card Game"
              img="https://i.postimg.cc/Y0tMzVfm/CAsino-5.png"
            />
          </div>
        </Slider>
      </div>
    )
  }
}
