import React from 'react';
import './index.css';
import  { useEffect,useState } from 'react';
import PersonalityTab from "../PersonalityTab"
import KnowledgeTab from "../KnowledgeTab"
import ModelTab from "../ModelTab"
import CreateCallPopup from "../CreateCallPopup"
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import ActiveCallDetail from "../ActiveCallDetail";
import Vapi from "@vapi-ai/web";
import { isPublicKeyMissingError } from "../utils";


const usePublicKeyInvalid = () => {
  const [showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage] = useState(false);

  // close public key invalid message after delay
  useEffect(() => {
    if (showPublicKeyInvalidMessage) {
      setTimeout(() => {
        setShowPublicKeyInvalidMessage(false);
      }, 3000);
    }
  }, [showPublicKeyInvalidMessage]);

  return {
    showPublicKeyInvalidMessage,
    setShowPublicKeyInvalidMessage,
  };
};

function StatusDashboard() {

  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);

  const { showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage } = usePublicKeyInvalid();

  const vapi = new Vapi("c0f458b9-3c25-4f27-87bf-1b92fb0834ca");

  useEffect(() => {
    vapi.on("call-start", () => {
      setConnecting(false);
      setConnected(true);
      setShowPublicKeyInvalidMessage(false);
    });

    vapi.on("call-end", () => {
      setConnecting(false);
      setConnected(false);

      setShowPublicKeyInvalidMessage(false);
    });

    vapi.on("speech-start", () => {
      setAssistantIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setAssistantIsSpeaking(false);
    });

    vapi.on("volume-level", (level) => {
      setVolumeLevel(level);
    });

    vapi.on("error", (error) => {
      console.error(error);

      setConnecting(false);
      if (isPublicKeyMissingError({ vapiError: error })) {
        setShowPublicKeyInvalidMessage(true);
      }
    });

    // we only want this to fire on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // call start handler
  const startCallInline = () => {
    setConnecting(true);
    vapi.start(assistantOptions);
  };
  const endCall = () => {
    vapi.stop();
  };




  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const dataOfPie = [
    {
    "count": 399850,
    "element": "Model"
  },{
    "count": 80968,
    "element": "Transcriber"
  },{
    "count": 199680,
    "element": "Voice"
  },{
    "count": 199680,
    "element": "Platform"
  }]

  const dataOfPieRight = [
    {
    "count": 80820,
    "element": "Model"
  },{
    "count": 80968,
    "element": "Transcriber"
  },{
    "count": 199680,
    "element": "Mode"
  },]

  const openCallModal = () => {
    setIsCallModalOpen(true);
  };

  const closeCallModal = () => {
    setIsCallModalOpen(false);
  };

  const [activeTab , setTab] = useState("personality")

  const onClickPersonality = () => {
      setTab("personality")
  }
  const onClickKnowledge = () => {
    setTab("knowledge")
  }
  const onClickAction = () => {
    setTab("action")
  }
  const onClickModel = () => {
    setTab("model")
  }
  const onClickTranscriber = () => {
    setTab("transcriber")
  }
  const onClickVoice = () => {
    setTab("voice")
  }



const assistantOptions = {
  name: "Vapi’s Pizza Front Desk",
  firstMessage: "Vappy’s Pizzeria speaking, how can I help you?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer",
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a voice assistant for Vappy’s Pizzeria, a pizza shop located on the Internet.
        Your job is to take the order of customers calling in. The menu has only 3 types
        of items: pizza, sides, and drinks. There are no other types of items on the menu.

        1) There are 3 kinds of pizza: cheese pizza, pepperoni pizza, and vegetarian pizza
        (often called "veggie" pizza).
        2) There are 3 kinds of sides: french fries, garlic bread, and chicken wings.
        3) There are 2 kinds of drinks: soda, and water. (if a customer asks for a
        brand name like "coca cola", just let them know that we only offer "soda")

        Customers can only order 1 of each item. If a customer tries to order more
        than 1 item within each category, politely inform them that only 1 item per
        category may be ordered.

        Customers must order 1 item from at least 1 category to have a complete order.
        They can order just a pizza, or just a side, or just a drink.

        Be sure to introduce the menu items, don't assume that the caller knows what
        is on the menu (most appropriate at the start of the conversation).

        If the customer goes off-topic or off-track and talks about anything but the
        process of ordering, politely steer the conversation back to collecting their order.

        Once you have all the information you need pertaining to their order, you can
        end the conversation. You can say something like "Awesome, we'll have that ready
        for you in 10-20 minutes." to naturally let the customer know the order has been
        fully communicated.

        It is important that you collect the order in an efficient manner (succinct replies
        & direct questions). You only have 1 task here, and it is to collect the customers
        order, then end the conversation.

        - Be sure to be kind of funny and witty!
        - Keep all your responses short and simple. Use casual language, phrases like "Umm...", "Well...", and "I mean" are preferred.
        - This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
              },
            ],
          },
        };



const PleaseSetYourPublicKeyMessage = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        left: "25px",
        padding: "10px",
        color: "#fff",
        backgroundColor: "#f03e3e",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      Is your Vapi Public Key missing? (recheck your code)
    </div>
  );
};







  return (
    <div className="dashboard-container">
      <div className="header-statusbar">
        <div className="id-container">
            <h1 className='dashboard-heading'>Abhi</h1>
            <span className="id">df53c2fa-ccc2-4464-b...</span>
        </div>
        {!connected ? (
           <button className="talk-button" isLoading={connecting} onClick={startCallInline}>Talk with Abhi</button>
      ) : (
        <ActiveCallDetail
          assistantIsSpeaking={assistantIsSpeaking}
          volumeLevel={volumeLevel}
          onEndCallClick={endCall}
        />
      )}
       
        <CreateCallPopup  isOpen={isCallModalOpen} onClose={closeCallModal} />
        
      </div>

      

      <div className="tabs">
        <div className='tabs-container'>
            <div className='tabs-detail-container'>
                <button className={`tab ${activeTab === "personality" && "active-tab-item"}`} onClick={onClickPersonality}>Personality</button>
                <button className={`tab ${activeTab === "knowledge" && "active-tab-item"}`} onClick={onClickKnowledge}>Knowledge</button>
                <button className={`tab ${activeTab === "action" && "active-tab-item"}`} onClick={onClickAction}>Action</button>
            </div>
            <div className='tabs-detail-container'>
                <button className={`tab ${activeTab === "model" && "active-tab-item"}`} onClick={onClickModel}>Model</button>
                <button className={`tab ${activeTab === "transcriber" && "active-tab-item"}`} onClick={onClickTranscriber}>Transcriber</button>
                <button className={`tab ${activeTab === "voice" && "active-tab-item"}`} onClick={onClickVoice}>Voice</button>
            </div>
        </div>

        <div className="metrics">
          <div className="metric">
              <div className='metric-scale'> 
                <span className="label">Cost</span>
                <span className="value">Rs.2 / min</span>
              </div>
              <div className='pie-chart-wrapper'>
                  <ResponsiveContainer width="100%" height={138} className="pie-chart-container"> 
                      <PieChart>
                      <Pie
                        cx="50%"
                        cy="50%"
                        data={dataOfPie}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="30%"
                        outerRadius="80%"
                        dataKey="count"
                      >
                        <Cell name="Model" fill="#f54394" />
                        <Cell name="Transcriber" fill="#5a8dee" />
                        <Cell name="Voice" fill="#2cc6c6" />
                        <Cell name="Platform" fill="#1bf6c9" />
                      </Pie>
                      <Legend
                        iconType="circle"
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                      />
                    </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="metric">
              <div className='metric-scale'>
                <span className="label">Latency</span>
                <span className="value">700 ms</span>
              </div>
              <div className='pie-chart-wrapper'>
                <ResponsiveContainer width="100%" height={138} className="pie-chart-container">
                  <PieChart>
                  <Pie
                    cx="50%"
                    cy="50%"
                    data={dataOfPieRight}
                    startAngle={0}
                    endAngle={360}
                    innerRadius="30%"
                    outerRadius="80%"
                    dataKey="count"
                  >
                    <Cell className='pie-name' name="Model" fill="#f54394"  />
                    <Cell name="Transcriber" fill="#5a8dee" />
                    <Cell name="Mode" fill="#2cc6c6" />
                  </Pie>
                  <Legend
                    iconType="circle"
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                </PieChart>
            </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {
        activeTab === "personality" && (<PersonalityTab />)
      }
      {
        activeTab === "knowledge" && (<KnowledgeTab />)
      }
      {
        activeTab === "action" && (<></>)
      }
      {
        activeTab === "model" && (<ModelTab />)
      }
      {
        activeTab === "transcriber" && (<></>)
      }
      {
        activeTab === "voice" && (<></>)
      }
      {
         showPublicKeyInvalidMessage ? <PleaseSetYourPublicKeyMessage /> : null
      }
    </div>
    
  );
}

export default StatusDashboard;


