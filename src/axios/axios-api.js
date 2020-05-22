import axiosService from "./axios-request"; // 从axios-request.js内引入axiosService

// 下面是POST形式
export const  reqHomeInit  = data => {  
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/homeInitializer/", // 主页初始化接口
    method: "post",
    data
  });
};
export const  reqFairyShop  = data => {
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/show_his_shelf/", // 精灵商店买家
    method: "post",
    data
  });
};
export const  reqstarRating  = data => {  
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/star_rating/", // 精灵商店买家评价接口
    method: "post",
    data
  });
};
export const  reqFairyBuy  = data => {  
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/buy/", // 精灵商店买家购买接口
    method: "post",
    data
  });
};
export const  reqRobotHistory  = data => { 
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/ansRobotHistory/",  // 代理人机器人对话历史接口
    method: "post",
    data
  });
};
export const  reqRobotDetail  = data => {  
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/ansRobotDetail/", // 代理人机器人对话详情
    method: "post",
    data
  });
};	
export const  reqChathist  = data => {
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/pub2square/chathist_page/", // 聊天记录页发布到问答广场
    method: "post",
    data
  });
};
export const  reqLookMe  = data => {  
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/myVisitors/", // 谁看过我
    method: "post",
    data
  });
};	
export const  reqCusayrob  = data => {  
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/cusayrob/", // 访客用户机器人对话接口
    method: "post",
    data
  });
};	
export const  reqHistoryAgent  = data => {
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/dialogHistory_agent", // AC聊天记录获取-代理人
    method: "post",
    data
  });
};
export const  reqHistoryCustomer  = data => {
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/dialogHistory_customer", // AC聊天记录获取-访客
    method: "post",
    data
  });
};
export const  reqCustomerInput  = data => {
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/customerInput", // AC聊天-访客输入接口
    method: "post",
    data
  });
};
export const  reqAgentInput  = data => {
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/agentInput", // AC聊天-代理人输入接口
    method: "post",
    data
  });
};


export const RanlingDatas = data => {
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/globalRank/", // 全球排行
    method: "post",
    data 
  });
};

export const RanlingDatasQi = data => {
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/fansRank/", // 人气排行
    method: "post",
    data 
  });
};

export const RanlingDatasFriend = data => {
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/friendsRank/", // 好友排行
    method: "post",
    data 
  });
};

// 每日任务
export const getTaskList = data => {
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/dailyTaskList/", // 好友排行
    method: "post",
    data 
  });
};

export const freandaList = data => { // 好友列表
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/friendsList/", // 好友排行
    method: "post",
    data 
  });
};

export const BeanList = data => { // 粉丝列表
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/common/followerList/", // 粉丝排行
    method: "post",
    data 
  });
};

export const yaoQing = data => { // 邀请好友页面
  return axiosService({
    url: "https://test-bebot-api.baoxianxia.com.cn/recommendlist/", 
    method: "post",
    data 
  });
};

// 下面是GET形式
// export const userInfo = params => {
//   return axiosService({
//     url: "/xxxx/user/xxxx", // 根据实际接口地址来写
//     method: "get",
//     params
//   });
// };