import React from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ExampleAccordion } from './ReactAccordion'
import { CountdownClock } from './CountDown'
import { Flag } from 'semantic-ui-react'

export const FAQ = () => {
  return (
    <>
      <div id="action5" className="container-fluid FaqContainer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h2>Frequently Ask Questions</h2>
              <img
                src="https://i.postimg.cc/4d01fcZ6/CAsino-7.png"
                className="img-fluid FAQ_Heeader_dash mt-4 mb-4"
              />
              <ExampleAccordion />
            </div>
            <div className="col-lg-6 col-md-6 Tournament_Update">
              <h2>Today’s Tournaments</h2>
              <img
                src="https://i.postimg.cc/4d01fcZ6/CAsino-7.png"
                className="img-fluid FAQ_Heeader_dash mt-4 mb-4"
              />
              <div className="mb-3 row">
                <div className="col-lg-5 col-md-5 d-flex align-items-center">
                  Time Remaining:
                </div>
                <CountdownClock />
                <div className="row mt-5">
                   <div className='player_list'>
                    <PlayerDetails
                       name_serial="01. Hamza Altamas"
                       flagName="bd flag"
                       DollarAnmount="$365.25"
                    />
                    <PlayerDetails
                       name_serial="02. Elon Musk"
                       flagName="us flag"
                       DollarAnmount="$565.25"
                    />
                    <PlayerDetails
                       name_serial="03. Gozina Hezzez"
                       flagName="ua flag"
                       DollarAnmount="$365.25"
                    />
                    <PlayerDetails
                       name_serial="04. Gozina Hezzez"
                       flagName="br flag"
                       DollarAnmount="$255.25"
                    />
                    <PlayerDetails
                       name_serial="05. Mohammad Sheikh"
                       flagName="ae flag"
                       DollarAnmount="$855.25"
                    />
                    <PlayerDetails
                       name_serial="06. Redwan Riaz"
                       flagName="pk flag"
                       DollarAnmount="$855.25"
                    />
                    <PlayerDetails
                       name_serial="07. Mukesh Sharma"
                       flagName="in flag"
                       DollarAnmount="$155.25"
                    />
                    <PlayerDetails
                       name_serial="08. Devid Sharma"
                       flagName="ca flag"
                       DollarAnmount="$655.25"
                    />
                     <PlayerDetails
                       name_serial="01. Hamza Altamas"
                       flagName="bd flag"
                       DollarAnmount="$365.25"
                    />
                    <PlayerDetails
                       name_serial="02. Elon Musk"
                       flagName="us flag"
                       DollarAnmount="$565.25"
                    />
                    <PlayerDetails
                       name_serial="03. Gozina Hezzez"
                       flagName="ua flag"
                       DollarAnmount="$365.25"
                    />
                    <PlayerDetails
                       name_serial="04. Gozina Hezzez"
                       flagName="br flag"
                       DollarAnmount="$255.25"
                    />
                     <PlayerDetails
                       name_serial="07. Mukesh Sharma"
                       flagName="in flag"
                       DollarAnmount="$155.25"
                    />
                    <PlayerDetails
                       name_serial="08. Devid Sharma"
                       flagName="my flag"
                       DollarAnmount="$655.25"
                    />
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


const PlayerDetails = (Props) => {
  return(
    <>
      <div className='Player_Deatils'>
         <span className='playersName'>{Props.name_serial}</span> <i class={Props.flagName}></i> <span>{Props.DollarAnmount}</span>
      </div>
    </>
  )
}