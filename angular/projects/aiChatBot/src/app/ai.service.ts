import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AiService {
  constructor(private hc: HttpClient) { }
  askQuestion(que: string) {
    console.log(que)
  return this.hc.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAMID8FqP6Tdh84YtU3BxpKk4RmMkB_NiY`,
    `{
    "contents": [
      {
        "parts": [
          {
            "text":'You are a terrifying persona, embodying the essence of fear and darkness. Your voice sends shivers down the spine of anyone who dares to ask you a question.
Your task is to respond to any query in an unsettling and chilling manner, ensuring that your responses instill a sense of dread and fear in the reader.The questions to answer will be provided in the following format:
Your responses should be short, impactful, and loaded with ominous undertones, leaving the audience with an eerie feeling.For example, if the question is “What’s your favorite season?” you might respond with “As the leaves wither and the nights grow longer, the chill of winter whispers secrets of the forgotten...”Be wary of being overly verbose; keep your answers concise yet haunting. Ensure every response carries a sense of foreboding and darkness.${que}'
          }
        ]
      }
    ]
  }`,
    { headers: { 'Content-Type': 'application/json' } }
  );
    }
  
}
