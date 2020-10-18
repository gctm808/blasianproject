import React, {Component} from 'react';
import '../../css/styles.css';
import FigWithCaption from '../../components/molecules/figWithCaption';

class Products extends Component {
    constructor(props){
        super(props)

        this.state = {
            current: 0
        }

        this.showActive = this.showActive.bind(this);
        this.clickBack = this.clickBack.bind(this);
        this.clickNext = this.clickNext.bind(this);
    }

    showActive(){
        let active = document.getElementById('productList');
        active.childNodes[this.state.current].classList.add('activeItem');
    }

    async clickBack(){
        let active = document.getElementById('productList');
        if(active.childNodes[this.state.current - 1] !== undefined){
            this.setState({
                current: await this.state.current - 1
            })

        
            active.childNodes[this.state.current + 1].classList.remove('activeItem');
            active.childNodes[this.state.current].classList.add('activeItem');
        }else{
            this.setState({
                current: await 4
            })

            active.firstChild.classList.remove('activeItem');
            active.childNodes[this.state.current].classList.add('activeItem');
        }
    }

    async clickNext(){
        let active = document.getElementById('productList');
        if(active.childNodes[this.state.current + 1] !== undefined){
            this.setState({
                current: await this.state.current + 1
            })

        
            active.childNodes[this.state.current - 1].classList.remove('activeItem');
            active.childNodes[this.state.current].classList.add('activeItem');
        }else{
            this.setState({
                current: await 0
            })

        
            active.lastChild.classList.remove('activeItem');
            active.childNodes[this.state.current].classList.add('activeItem');
        }
    }


    componentDidMount(){
       this.showActive();
    }

    render(){
        return (
            <div className='l productsContainer'>
                <h2>WHAT WE OFFER</h2><br />
                <div className='productsPlusArrows'>
                    <i onClick={this.clickBack} className="fas fa-chevron-left fa-3x productNav"></i>
                    <div id='productList'>
                        <FigWithCaption img='annuities.jpg' title='Annuities' caption='An annuity is a financial vehicle that provides a means to accumulate funds, usually for a guaranteed interest or guaranteed income for retirement for a certain period of time or for the rest of your life. We have fixed immediate and deferred annuities, fixed indexed annuities, and multi- year guarantee annuities.' productLink='/products/annuities' />
                        <FigWithCaption img='life.png' title='Life Insurance' caption='Life insurance is for the living. Not only does it give your clients peace of mind for the surviving family members, but it can also include benefits for your clients to enhance and lead a more fulfilling life directed by them. We have a broad portfolio of life insurance products to fit your clients’ needs for the present day and future.' productLink='/products/life' />
                        <FigWithCaption img='ltc.png' title='Long-Term Care' caption='Long term care does not equate to a nursing home. In fact, most clients prefer to receive care in the comfort of their own home. There are reimbursement plans, as well as cash indemnity plans. Both plans have qualifying events to be on claim. We have stand-alone options as well as life insurance with LTC riders.' productLink='/products/ltc' />
                        <FigWithCaption img='disability.png' title='Disability Coverage' caption='Disability insurance, in theory, is your client’s paycheck insurance, also affectionately known as “MUG” insurance. It covers your client’s Mortgage, Utilities and Groceries. If they fell ill or got into an accident and couldn’t work, how will they pay their daily expenses? Let us help you find the right carrier that’s appropriate for your clients.' productLink='/products/disabilities' />
                        <FigWithCaption img='linkedBenefits.png' title='Linked Benefits' caption='Sometimes a traditional stand-alone long term care policy can be pricey and if you don’t ever use your policy, you’ve lost all the premiums you’ve put into it, and oftentimes a carrier will raise your premiums. A Linked Benefit product combines universal life and long term care benefits into one product, providing a bucket of money for covered long term care expenses, a death benefit or both. You may even choose to have your premium returned should you choose to terminate your policy. And the premiums and benefits are guaranteed.' productLink='/products/linked' />
                    </div>
                    <i onClick={this.clickNext} className="fas fa-chevron-right fa-3x productNav"></i>
                </div>
            </div>
        )
    }
};

export default Products;