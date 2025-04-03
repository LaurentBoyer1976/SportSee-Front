/**
 * @description UserModel class
 * @description UserPerformanceModel class
 * @class UserModel
 * @class UserPerformanceModel
 * @constructor UserModel
 * @constructor UserPerformanceModel
 * @param {Object} data - Data to initialize the model
 * @param {number} data.id - User ID
 * @param {Object} data.userInfos - User information
 * @param {string} data.userInfos.firstName - User first name
 * @param {string} data.userInfos.lastName - User last name
 * @param {number} data.userInfos.age - User age
 * @param {number} data.todayScore - User score for today
 * @param {number} data.score - User score
 * @param {Object} data.keyData - User key data 
 * @param {number} data.keyData.calorieCount - User calorie count
 * @param {number} data.keyData.proteinCount - User protein count
 * @param {number} data.keyData.carbohydrateCount - User carbohydrate count
 * @param {number} data.keyData.lipidCount - User lipid count
 * @param {Object} data.kind - User performance kind
 * @param {Array} data.data - User performance data
 * @param {number} data.data.kind - User performance kind ID
 */
export class UserModel {
  constructor(data) {
    this.id = data.id || data.userId;
    this.firstName = data.userInfos?.firstName || "Inconnu";
    this.lastName = data.userInfos?.lastName || "Inconnu";
    this.age = data.userInfos?.age || 0;
    this.score = (data.todayScore || data.score || 0) * 100;
    this.keyData = {
      calories: data.keyData?.calorieCount || 0,
      protein: data.keyData?.proteinCount || 0,
      carbs: data.keyData?.carbohydrateCount || 0,
      fat: data.keyData?.lipidCount || 0,
    };
  }
}

export class UserPerformanceModel {
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data.map((item) => ({
      kindId: item.kind,
      kindName: data.kind[item.kind],
      value: item.value,
    }));
  }
}
