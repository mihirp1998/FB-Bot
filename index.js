/**
 * Created by mihirprabhudesai on 21/04/17.
 */
 "use strict";
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
    token: 'EAACZCwJsPAAoBAJsbVZASYfKTP5GlbAjNRrmWi9mGVPUFQfDD0N2mzss5XMncoRZCMzOzPyZAfrlNHUksVKZBjTHQZCYdfKrf4vyBCn5QQZBYZAeSxshg7hpeFhoWYgCk92YyL6x4M4KZBZCcjRaBibBfhvTXVwacZBmRcrkhM6gt159OSIT7Dnkdga',
    verify: 'my_voice_is_my_password_verify_me',

});
http.createServer(bot.middleware()).listen(80,'localhost')

bot.on('error', (err) => {
    console.log(err.message)
})

bot.setGetStartedButton(
    [
        {
            "payload":"GET_STARTED_PAYLOAD"
        }
    ]
)
bot.setPersistentMenu(
    [
        {
            "type":"postback",
            "title":"Get Started",
            "payload":"GET_STARTED_PAYLOAD"
        },
        {
            "type":"postback",
            "title":"Overall Device Consumption",
            "payload":"Get_consumption"
        },
        {
            "type":"postback",
            "title":"Status of devices",
            "payload":"Status"
        },
        {
            "type":"postback",
            "title":"Overall Member Usage",
            "payload":"Usage"
        },
        {
            "type":"postback",
            "title":"Pay Bill",
            "payload":"Paybill"
        }
    ]

)

var devices =[];
var a ;

bot.on('postback', (payload, reply, actions) => {
    bot.getProfile(payload.sender.id, (err, profile) => {

  let firstname = profile.first_name
 var value = payload.postback.payload;
    //console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
switch(value) {


    case "GET_STARTED_PAYLOAD" :
        a = 1;
        let texta = "Hello " + firstname + " :)";

        bot.sendMessage(payload.sender.id,

            {

                "text": texta

            }
        )
        break;
    //  reply({ text: texta}, (err, info) => {})

    case "START_CHATTING" :

        bot.sendMessage(payload.sender.id,

            {
                "text": "Select one of the connected devices",
                "quick_replies": [
                    {
                        "content_type": "text",
                        "title": "Lights",
                        "payload": "Lights"
                    },
                    {
                        "content_type": "text",
                        "title": "AC",
                        "payload": "AC"
                    },
 {
                        "content_type": "text",
                        "title": "Fridge",
                        "payload": "Fridge"
                    },
 {
                        "content_type": "text",
                        "title": "Toaster",
                        "payload": "Toaster"
                    },
                ]
            }
        )
        break;
    case "Power" :
        bot.sendMessage(payload.sender.id,

            {
                "text": "Select the power",
                "quick_replies": [
                    {
                        "content_type": "text",
                        "title": "On",
                        "payload": "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
                    },
                    {
                        "content_type": "text",
                        "title": "Off",
                        "payload": "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
                    }
                ]
            }
        )
        break;
    case "Get_consumption" :
        bot.sendMessage(payload.sender.id,

            {
                "attachment":{
                    "type":"image",
                    "payload":{
                        "url":"http://www.storybench.org/wp-content/uploads/2015/11/barchart_d3plus.png"
                    }
                },
                "quick_replies": [
                    {
                        "content_type": "text",
                        "title": "Go Back to Device",
                        "payload": "Current_Device"
                    },
                    {
                        "content_type": "text",
                        "title": "Go Back Home",
                        "payload": "Home"
                    }
                ]
            }
        )
        break;
    case "Status" :
        bot.sendMessage(payload.sender.id,

            {
                "text": "Lights (330 watts) -> On (Consuming 440 Watts (More than Normal))" +
                "\n\nTV (1330 watts) -> On (Consuming 1540 Watts (WARNING - Faulty Device))",
                "quick_replies": [
                    {
                        "content_type": "text",
                        "title": "Go Back to Device",
                        "payload": "Current_Device"
                    },
                    {
                        "content_type": "text",
                        "title": "Go Back Home",
                        "payload": "Home"
                    }
                ]
            }
        )
        break;
    case "Usage" :
        bot.sendMessage(payload.sender.id,

            {
                "attachment":{
                    "type":"image",
                    "payload":{
                        "url":"http://www.storybench.org/wp-content/uploads/2015/11/barchart_d3plus.png"
                    }
                },
                "quick_replies": [
                    {
                        "content_type": "text",
                        "title": "Go Back to Device",
                        "payload": "Current_Device"
                    },
                    {
                        "content_type": "text",
                        "title": "Go Back Home",
                        "payload": "Home"
                    }
                ]
            }
        )
        break;
    case "Paybill" :
        bot.sendMessage(payload.sender.id,

            {
                "text": "It is currently in testing",
                "quick_replies": [
                    {
                        "content_type": "text",
                        "title": "Go Back to Device",
                        "payload": "Current_Device"
                    },
                    {
                        "content_type": "text",
                        "title": "Go Back Home",
                        "payload": "Home"
                    }
                ]
            }

        )
        break;
    case "Past_Usage" :
        bot.sendMessage(payload.sender.id,

            {
                "attachment":{
                    "type":"image",
                    "payload":{
                        "url":"http://www.storybench.org/wp-content/uploads/2015/11/barchart_d3plus.png"
                    }
                },
                "quick_replies": [
                    {
                        "content_type": "text",
                        "title": "Go Back to Device",
                        "payload": "Current_Device"
                    },
                    {
                        "content_type": "text",
                        "title": "Go Back Home",
                        "payload": "Home"
                    }
                ]
            }
        )
        break;
    case "Member_usage" :
        bot.sendMessage(payload.sender.id,

            {
                "attachment":{
                    "type":"image",
                    "payload":{
                        "url":"http://www.mihirprabhudesai.com/mihirpp.jpg"
                    }
                },
                "quick_replies": [
                    {
                        "content_type": "text",
                        "title": "Go Back to Device",
                        "payload": "Current_Device"
                    },
                    {
                        "content_type": "text",
                        "title": "Go Back Home",
                        "payload": "Home"
                    }
                ]
            }
        )
        break;


        

}

}
)


})

bot.on('delivery', (payload, reply, actions) => {

if(a == 1)
{
    a=2;
  /*  bot.sendMessage(payload.sender.id,

        {
            "text": "Which electrical device would you like to be turned on?",
            "quick_replies": [
                {
                    "content_type": "text",
                    "title": "Lights",
                    "payload": "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
                },
                {
                    "content_type": "text",
                    "title": "AC",
                    "payload": "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
                }
            ]
        }
    )*/

    bot.sendMessage(payload.sender.id,

        {
            "attachment":{
                "type":"template",
                "payload":{
                    "template_type":"button",
                    "text":"What do you want to do next?",
                    "buttons":[
                        {
                            "type":"web_url",
                            "url":"http://technonazi.com/my-homebot/",
                            "title":"Show Website"
                        },
                        {
                            "type":"postback",
                            "title":"Start Chatting",
                            "payload":"START_CHATTING"
                        }
                    ]
                }
            }
        }
    )
}
})
function currentDevice(id,last) {
    switch(last) {

        case "AC":
        bot.sendMessage(id,

                {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Central " + last + " - Working Normally",
                                    "image_url": "http://ecx.images-amazon.com/images/I/712BNIXcBTL._SL1500_.jpg",
                                    "subtitle": "Currently its turned on and is consuming 3512 watts power",
                                    "buttons": [
                                        {
                                            "type": "postback",
                                            "title": "Past Energy Usage",
                                            "payload": "Past_Usage"
                                        }, {
                                            "type": "postback",
                                            "title": "Power",
                                            "payload": "Power"
                                        }
                                        , {
                                            "type": "postback",
                                            "title": "Family Usage",
                                            "payload": "Member_usage"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            );
            break;
        case "Lights":
            bot.sendMessage(id,

                {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Hall " + last + " - Working Normally",
                                    "image_url": "http://www.bichury.com/eng/images/led-tube-lights.jpg",
                                    "subtitle": "Currently its turned on and is consuming 420 watts power",
                                    "buttons": [
                                        {
                                            "type": "postback",
                                            "title": "Past Energy Usage",
                                            "payload": "Past_Usage"
                                        }, {
                                            "type": "postback",
                                            "title": "Power",
                                            "payload": "Power"
                                        }
                                        , {
                                            "type": "postback",
                                            "title": "Family Usage",
                                            "payload": "Member_usage"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            );
            break;
    }

}

bot.on('message', (payload, reply) => {
    let text = payload.message.text
    switch(text){
    case "Hi":
        bot.sendMessage(payload.sender.id,

            {
                "attachment":{
                    "type":"template",
                    "payload":{
                        "template_type":"button",
                        "text":"What do you want to do next?",
                        "buttons":[
                            {
                                "type":"web_url",
                                "url":"http://technonazi.com/my-homebot/",
                                "title":"Show Website"
                            },
                            {
                                "type":"postback",
                                "title":"Start Chatting",
                                "payload":"START_CHATTING"
                            }
                        ]
                    }
                }
            }
        )
        break;

   case "AC":
     devices.push(text);
        bot.sendMessage(payload.sender.id,

            {
                "attachment":{
                    "type":"template",
                    "payload":{
                        "template_type":"generic",
                        "elements":[
                            {
                                "title":"Central AC - Working Normally",
                                "image_url":"http://ecx.images-amazon.com/images/I/712BNIXcBTL._SL1500_.jpg",
                                "subtitle":"Currently its turned on and is consuming 3512 watts power",
                                "buttons":[
                                    {
                                        "type":"postback",
                                        "title":"Past Energy Usage",
                                        "payload":"Past_Usage"
                                    },{
                                        "type":"postback",
                                        "title":"Power",
                                        "payload":"Power"
                                    }
                                    ,{
                                        "type":"postback",
                                        "title":"Family Usage",
                                        "payload":"Member_usage"
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        );
        break;
    case "On":
        bot.sendMessage(payload.sender.id,

            {
                "attachment":{
                    "type":"template",
                    "payload":{
                        "template_type":"button",
                        "text":"The device has been turned on ",
                        "buttons":[
                            {
                                "type":"web_url",
                                "url":"http://technonazi.com/my-homebot/",
                                "title":"Show Website"
                            },
                            {
                                "type":"postback",
                                "title":"Start Chatting",
                                "payload":"START_CHATTING"
                            }
                        ]
                    }
                }
            }
        )
        break;
    case "Off":
        bot.sendMessage(payload.sender.id,

            {
                "attachment":{
                    "type":"template",
                    "payload":{
                        "template_type":"button",
                        "text":"The device has been turned off ",
                        "buttons":[
                            {
                                "type":"web_url",
                                "url":"http://technonazi.com/my-homebot/",
                                "title":"Show Website"
                            },
                            {
                                "type":"postback",
                                "title":"Start Chatting",
                                "payload":"START_CHATTING"
                            }
                        ]
                    }
                }
            }
        )
        break;
    case "Lights":
        devices.push(text);
        bot.sendMessage(payload.sender.id,

            {
                "attachment":{
                    "type":"template",
                    "payload":{
                        "template_type":"generic",
                        "elements":[
                            {
                                "title":"Hall Lights - Working Normally",
                                "image_url":"http://www.bichury.com/eng/images/led-tube-lights.jpg",
                                "subtitle":"Currently its turned on and is consuming 420 watts power",
                                "buttons":[
                                    {
                                        "type":"postback",
                                        "title":"Past Energy Usage",
                                        "payload":"Past_Usage"
                                    },{
                                        "type":"postback",
                                        "title":"Power",
                                        "payload":"Power"
                                    }
                                    ,{
                                        "type":"postback",
                                        "title":"Family Usage",
                                        "payload":"Member_usage"
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        );
        break;
    case "Go Back Home":
        bot.sendMessage(payload.sender.id,

            {
                "attachment":{
                    "type":"template",
                    "payload":{
                        "template_type":"button",
                        "text":"What do you want to do next?",
                        "buttons":[
                            {
                                "type":"web_url",
                                "url":"http://technonazi.com/my-homebot/",
                                "title":"Show Website"
                            },
                            {
                                "type":"postback",
                                "title":"Start Chatting",
                                "payload":"START_CHATTING"
                            }
                        ]
                    }
                }
            }
        )
        break;
    case "Go Back to Device":
        currentDevice(payload.sender.id,devices.pop());
        break;

        default:

            bot.sendMessage(payload.sender.id,

                {

                    "text": "Sorry couldn't understand your message..",
                    "quick_replies": [
                        {
                            "content_type": "text",
                            "title": "Go Back Home",
                            "payload": "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
                        }
                        ]

                }
            )



    }

}
)



 /*   bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
    if (err) throw err

    console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
})
})*/



console.log('Echo bot server running at port 3000.')
