/**
 * Created by Benson on 2018/1/8.
 */

const host = 'http://www.schrtinfo.com/app/api';
// const host = 'http://192.168.0.141:8081/app/api';

//图片上传
export const uploadImg = function () {
  const URL = '/base/uploadImg';
  const API = host + URL;
  return API;
};
//所有团队列表上传
export const teamList = function () {
  const URL = '/team/list';
  const API = host + URL;
  return API;
};
export const detail = function () {
  const URL = '/team/detail?id=';
  const API = host + URL;
  return API;
};
export const ADdetail = function () {
  const URL = '/healthTheacher/detail?id=';
  const API = host + URL;
  return API;
};
//获取团队升级服务包
export const findTeamGrade = function () {
  const URL = '/team/findTeamGrade?id=';
  const API = host + URL;
  return API;
};
//用户成为团队游客
export const userAddTeam = function () {
  const URL = '/customer/userAddTeam';
  const API = host + URL;
  return API;
};
//公告list
export const getList = function () {
  const URL = '/announcement/getRollAnnouncement?size=10&page=1';
  const API = host + URL;
  return API;
};
//用户获取团队
export const getCustomerTeams = function () {
  const URL = '/customer/getCustomerTeams';
  const API = host + URL;
  return API;
};
//用户预约
export const addVisitInformation = function () {
  const URL = '/team/addVisitInformation';
  const API = host + URL;
  return API;
};
//获取团队医生预约时间
export const getTeamVisitTime = function () {
  const URL = '/visit/getTeamVisitTime?teamId=';
  const API = host + URL;
  return API;
};
//获取用户个人信息
export const getCustomerMessage = function () {
  const URL = '/customer/getCustomerMessage';
  const API = host + URL;
  return API;
};
//修改用户个人信息
export const updateUserMessage = function () {
  const URL = '/customer/updateUserMessage';
  const API = host + URL;
  return API;
};
//获取用户个人信息
export const getCustomerHealthTeachers = function () {
  const URL = '/customer/getCustomerHealthTeachers';
  const API = host + URL;
  return API;
};
//获取用户个人消费记录
export const getCustomerHistoryOrder = function () {
  const URL = '/customer/getCustomerHistoryOrder?type=';
  const API = host + URL;
  return API;
};
//获取用户团队服务剩余次数
export const getCustomerServiceDetial = function () {
  const URL = '/customer/getCustomerServiceDetial';
  const API = host + URL;
  return API;
};
//获取用户团队单个服务剩余次数   healthServiceId  &  teamId
export const getCustomerServiceNum = function () {
  const URL = '/customer/getCustomerServiceNum';
  const API = host + URL;
  return API;
};
//获取用户团队单个服务服务记录   healthServiceId  &  teamId
export const findTeamCustomerHealServiceNum = function () {
  const URL = '/team/findTeamCustomerHealServiceNum';
  const API = host + URL;
  return API;
};
//获取用户云设备
export const getByCustomerCouldEquipments = function () {
  const URL = '/customer/getByCustomerCouldEquipments';
  const API = host + URL;
  return API;
};
//删除用户云设备
export const deleteCouldEquipment = function () {
  const URL = '/customer/deleteCouldEquipment?id=';
  const API = host + URL;
  return API;
};
//添加用户云设备
export const addCouldEquipment = function () {
  const URL = '/customer/addCouldEquipment';
  const API = host + URL;
  return API;
};
//获取用户健康数据
export const getByCustomerHealthDatas = function () {
  const URL = '/customer/getByCustomerHealthDatas';
  const API = host + URL;
  return API;
};
//用户添加健康数据
export const addHealthData = function () {
  const URL = '/customer/addHealthData';
  const API = host + URL;
  return API;
};
//获取用户图片
export const getByCustomerCustomerHasImages = function () {
  const URL = '/customer/getByCustomerCustomerHasImages?type=';
  const API = host + URL;
  return API;
};
//用户出院证明等图片
export const addCustomerHasImage = function () {
  const URL = '/customer/addCustomerHasImage';
  const API = host + URL;
  return API;
};
//用户发送消息
export const addChatLog = function () {
  const URL = '/messageLog/addChatLog';
  const API = host + URL;
  return API;
};
//消息记录
export const findChatLog = function () {
  const URL = '/messageLog/findChatLog';
  const API = host + URL;
  return API;
};
//用户重点数据
export const getByCustomerCustomerCheckReports = function () {
  const URL = '/customer/getByCustomerCustomerCheckReports?type=1';
  const API = host + URL;
  return API;
};
//支付
export const pay = function () {
  const URL = '/buyerOrder/create';
  const API = host + URL;
  return API;
};
//获取充值金额列表
export const getHealthPackage = function () {
  const URL = '/healthPackage/getHealthPackage?type=4';
  const API = host + URL;
  return API;
};
