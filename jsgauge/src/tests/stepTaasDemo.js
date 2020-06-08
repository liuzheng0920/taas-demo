'use strict';

import  fetch from './util/fetchclient'
import assert from 'assert';
const  data = {username: "liuzheng",password: "123456"}

step("发送接口 <url>",async url=>{

   const  respData = await fetch(url, data, "POST");

   assert.strictEqual(respData.email,"123@ceb.com")

})