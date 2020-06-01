import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { API_URL } from '../../config';
import { handleResponse } from '../helpers';


// import other questionnaires the same way
import * as demo from '../../questionnaires/DEMO';
import * as ius from '../../questionnaires/IUS';
import * as bis from '../../questionnaires/BIS11';
import * as asrs from '../../questionnaires/ASRS11';
import * as stai from '../../questionnaires/STAI_TRAIT';
import * as ocir from '../../questionnaires/OCIR';
import * as gad from '../../questionnaires/GAD'; 
import * as zung from '../../questionnaires/ZUNG';
import * as aes from '../../questionnaires/AES';
import * as spq from '../../questionnaires/SPQ';
import * as lsa from '../../questionnaires/LSA';
import * as iq from '../../questionnaires/IQ';
import * as feedback from '../../questionnaires/FEEDBACK';


var quizData = {
  demo: demo, 
  ius: ius,
  bis: bis,
  asrs: asrs,
  spq: spq,
  lsa: lsa,
  aes: aes, 
  stai: stai, 
  ocir: ocir,
  gad: gad, // add gad after 
  zung:zung, 
  iq:iq, 
  feedback: feedback 
}

function createQuiz(id,survey_name) {
     return {
         id: id,
         surveytag: survey_name,
         quizQuestions: quizData[survey_name]
     };
 }


// var list = [];
//  for(var i = 0; i < n; i++) {
//     var obj = createQuiz(i,survey_list[i]); //add other params if you need
//     list.push(obj);
//  }
//  console.log(list);


class Survey extends React.Component {
  constructor(props){
    super(props);
    
    // Information about a specific block of the Survey: 
    const block_info = {
      surveytag  : this.props.location.state.participant_info.survey_list[0], // First questionnaire in the list 
     }
    
    const n =  this.props.location.state.participant_info.survey_list.length-1;   

    const participant_info = {

      prolific_id           : this.props.location.state.participant_info.prolific_id, 
      study_id              : this.props.location.state.participant_info.study_id, 
      participant_id        : this.props.location.state.participant_info.participant_id, 
      survey_list           : this.props.location.state.participant_info.survey_list, 
      TotalBlock            : n, // PUT 0 or 1 for DEBUT otherwise n, 
      block_number_survey   : this.props.location.state.participant_info.block_number_survey, 
      date_time             : this.props.location.state.participant_info.date_time, 
      date                  : this.props.location.state.participant_info.date, 
      game_id               : this.props.location.state.participant_info.game_id
  
    }

    
    this.state = {
      participant_info : participant_info,
      block_info       : block_info,
      newblock_frame   : this.props.location.state.newblock_frame,  
      questions        : quizData[participant_info.survey_list[0]].default, // quizData[this.props.location.state.participant_info.survey_list[0]].default,
      finished         : false,
    }

   
    this.getSurveyBlock.bind(this);
    this.redirectToQuiz.bind(this); 
    this.redirectToEnd.bind(this); 
    this._isMounted = false;
    this._handleGoBack.bind(this); 
    this._handleTimeOut.bind(this);  
 
  }

  redirectToQuiz () {
    if((this.props.location.state.participant_info.block_number_survey <= (this.state.participant_info.TotalBlock)))
      
          {           
          if (this.state.newblock_frame){ // TRUE
          this.setState({newblock_frame : false})

          
          this.props.history.push({
           pathname: `/QuizBlock`,
           state: {participant_info: this.state.participant_info,
                   block_info      : this.state.block_info,
                   questions       : this.state.questions,
                 }
          })}
          else // FALSE 
          {
            if (this._isMounted)
            {

              
              if (this.props.location.state.participant_info.block_number_survey===this.state.participant_info.TotalBlock){ // just finished the LAST BLOCK 
              
                // redirect to the final 
                this.setState({finished: true})

              } 
              else if (this.props.location.state.participant_info.block_number_survey<this.state.participant_info.TotalBlock){ // just finished the LAST BLOCK 
              
              const newblocknumber = this.props.location.state.participant_info.block_number_survey + 1
              // console.log(newblocknumber)
              this.getSurveyBlock(newblocknumber,this.state.participant_info.survey_list)
              this.setState({newblock_frame: true, participant_info : {...this.state.participant_info, block_number_survey:newblocknumber},})

              }

            }
          }
        }
      }
    
  componentDidMount() { 
  this._isMounted = true;
  document.body.style.background= '#fff'; 
  // this._isMounted && this.getSurveyBlock(this.props.location.state.participant_info.block_number,this.props.location.state.participant_info.survey_list);
    window.history.pushState(window.state, null, window.location.href);
    window.addEventListener('popstate', e => this._handleGoBack(e));
    window.onbeforeunload = this._handleRefresh

  }

  componentWillUnmount() {
    clearTimeout(this._handleTimeOut);
    this._isMounted = false;
  }


  _handleRefresh(evt){
    return false // error message when refresh occurs
  }

  _handleGoBack(event){
    window.history.go(1);
  }

  _handleTimeOut() {
    // console.log('Timeout:', this.state)
    setTimeout(() => {
     this.redirectToQuiz()
    }, 1500);
} 

 // Get info about the specific Survey Block: 
 getSurveyBlock(block_number_,survey_list_) {

    // console.log('Block Number Get Survey Block:',block_number_+1)

    const surveytag_block = survey_list_[block_number_]
    // console.log('SurveyTag Block:',surveytag_block)
 
    this.setState({ loading: true , questions: quizData[survey_list_[block_number_]].default, block_info : {...this.state.block_info, surveytag:surveytag_block}});

}

 redirectToEnd(){

    // Store the cashed data 

    let cashed_ = {}
    if (sessionStorage.hasOwnProperty('cashed')) {
        cashed_ = sessionStorage.getItem('cashed');

        try {
          cashed_ = JSON.parse(cashed_);
          // console.log('parsed cash',cashed_)
        } catch (e) {
          console.log('Cannot parse cashed')
        }
    }

    // Push cashed data to the DB
    var date_time_end = new Date().toLocaleString();

    let body_cashed = {
      'log'          : cashed_,  // this.state.cashed, 
      'date_time'    : this.state.participant_info.date_time, 
      'date_time_end': date_time_end, 
      'log_type'     : 'survey' 
    }
    
    fetch(`${API_URL}/attempts/save/`+ this.state.participant_info.participant_id + `/` + this.state.participant_info.game_id + `/` + this.state.participant_info.prolific_id, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(body_cashed)
    })

      alert("You will now be redirected to the validation page. Please, confirm leaving the page. Thank you!")
      // window.location.replace('https://app.prolific.co/submissions/complete?cc=1A496EDB')
      window.location = 'https://app.prolific.co/submissions/complete?cc=570C2B94' // + this.props.location.state.participant_info.study_id // CHECK if validation code == stidu id
  }
  

render()
  { 
    let text
    if ((this.state.block_info.surveytag === this.props.location.state.participant_info.survey_list[0]) && (this.state.newblock_frame))
    { 
      text = <div className='SurveyIntroText'> <p>Dear Participant,</p>
      <p>Thank you for your great work on finishing the game!</p>
      <p>You will now be asked to complete several questionnaires.</p></div>
      
    return (
      <div>
      <center> 
      <div className="instructionsButtonContainer">
        <div>
          {text}           
        </div> 
        <center>
          <Button className="buttonInstructionStart" onClick={()=>this.redirectToQuiz()}>
          <span className="bold">START</span>
          </Button>
        </center>
      </div>
      </center> 
      </div>);
    } 

     else if ((this.state.block_info.surveytag !== this.props.location.state.participant_info.survey_list[0]) && (this.state.newblock_frame)) 
    { 
        return(<div>{this._handleTimeOut()}</div>);
      }

    else if (this.state.participant_info.block_number_survey === this.state.participant_info.TotalBlock && this.state.finished===true) 
    {
        text = <div className='SurveyIntroText'> <p><span className="bold">You completed all the questionnaires!</span></p>
            <br></br>
            <p>In this experiment, we were interested in how you learn from previous experience and how that is reflected in your confidence ratings.</p>
            <p>Previous work has linked differences in behaviour and confidence ratings to mental health traits, which we are aiming to understand better.</p>
            <p> Thanks for your help!</p>
            <p>To get information regarding how to access mental health services please click <a href="https://www.nhs.uk/using-the-nhs/nhs-services/mental-health-services/how-to-access-mental-health-services" target="_blank" rel="noopener noreferrer">here</a></p> 
            <br></br>
            <p>You will now be redirected to the validation page.</p>
            <p>Please, confirm leaving the page if prompted by the browser. Thank you!</p></div>
      
      return (
          <div>
          <center> 
          <div className="restarttraining">
              {text}  <div className="translate"/>
          </div>
          <div>
            <Button variant="secondary" color="danger" size="lg" className="buttonInstructionFinal" type="submit" id="validate" onClick={() => this.redirectToEnd()}>Validate</Button>
          </div>
          </center>
          </div>);        
    }

    else
    {
          text = 'Thank you! Please, continue ...' 
        return (
      <div>
      <center>
      <div className="SurveyIntroText">
        {text}           
      </div>
      <br></br>
      <center>
            <Button className="buttonInstructionStart" onClick={()=> this.state.finished ? this.redirectToEnd() : this.redirectToQuiz()}>
            &#8594;
            </Button>
            </center>
    </center>
    </div>);
    }    
  }

}

export default withRouter(Survey);