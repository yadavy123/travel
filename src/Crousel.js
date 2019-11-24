import React, {PureComponent} from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
const modeOT =[
    {id:1,value:'Train'},
    {id:2,value:'Bus'},
    {id:3,value:'Flight'},
]
const CardList = [
    {cardName:'Legend 1',bck:'red', fromCity:'Jaipur', toCity:'Gorakhpur',dot:new Date('05/04/2020').toLocaleString(), PNR:'2634323430', modeOT:'2', purposeOT:'Meeting' },
    {cardName:'Legend 2',bck:'green', fromCity:'Lucknow', toCity:'Kanpur',dot:new Date('07/04/2020').toLocaleString(), PNR:'2634323431', modeOT:'3', purposeOT:'Meeting' },
    {cardName:'Legend 3',bck:'blue', fromCity:'Delhi', toCity:'Gurugram',dot:new Date('05/01/2020').toLocaleString(), PNR:'2634323432', modeOT:'1', purposeOT:'Meeting' },
    {cardName:'Legend 4',bck:'orange', fromCity:'Pune', toCity:'Mumbai',dot:new Date('03/03/2020').toLocaleString(), PNR:'2634323434', modeOT:'2', purposeOT:'Meeting' },
    {cardName:'Legend 5',bck:'lightgray', fromCity:'Delhi', toCity:'Ahamdabad',dot:new Date('02/04/2020').toLocaleString(), PNR:'2634323435', modeOT:'3', purposeOT:'Meeting' },
    {cardName:'Legend 6',bck:'pink', fromCity:'Chennai', toCity:'Triveni',dot:new Date('08/09/2020').toLocaleString(), PNR:'2634323436', modeOT:'1', purposeOT:'Meeting' }
]

export default class Carousels extends PureComponent {

  state = {
    width : 'auto',
    height : 'auto',
    changeWidth : 600,
    changeHeight : 400
  }
   changeHeight = (e) => {
    console.log(e);
    if(e && e.target && e.target.value){
        this.setState({changeHeight :  parseInt(e.target.value)})
    }
    // console.log('height',height);
    
}
 changeWidth = (e) => {
    if(e && e.target && e.target.value){
      this.setState({changeWidth :  parseInt(e.target.value)})
    }
    // console.log('width',width);

}

handleClick = (e) =>  {
  e.preventDefault();
  this.setState(state => ({
    height : state.changeHeight,
    width : state.changeWidth
  }));
}
handleReset = (e) =>{
  e.preventDefault()
  this.setState({changeWidth : 'auto'})
  this.setState({changeHeight : 'auto'})

  this.setState(state => ({
    height : state.changeHeight,
    width : state.changeWidth
  }));
}
  render() {
    return(
    <div className="app-module">
      <div style={{flexDirection : 'row', justifyContent : 'space-between', flex: 1, margin : 5, padding : 10}}>
<input type="text"  onChange={this.changeWidth} placeholder="Enter width"></input>
<input type="text" onChange={this.changeHeight} placeholder="Enter height"></input>
<button onClick={this.handleClick}>Done</button>
<button onClick={this.handleReset}>Reset</button>

      </div>
      <div className="main-class" style={{ width : this.state.width, height : this.state.height, padding : 10, backgroundColor : '#cdf'}}>
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all 1"
  transitionDuration={1000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
      {CardList.map((item, i)=>{
          return <div className="child-item" style={{flexDirection:'row',display : 'inline-block', textAlign:'left', backgroundColor:item.bck, marginLeft : 10, alignItems : 'center'}}>
              <div style={{margin : 5}}> 
              <p> From:<span>{item.fromCity}</span></p>
              <p> To:<span>{item.toCity}</span></p>
              <p> Travel Date:<span>{item.dot}</span></p>
              <p> PNR:<span>{item.PNR}</span></p>
              <p> Mode of Travel:<span>
              <select name="modeoftravel">
                {modeOT.map((e, key) => {
                    return <option key={e.id} selected={item.modeOT == e.id} value={e.value}>{e.value}</option>;
                })}
                </select>
                </span>
                </p>
              <p> Purpose Of Travel:<span>{item.purposeOT}</span></p>
              </div>

          </div>
      })}
</Carousel>
      </div>
 </div>
)
  }
  }
