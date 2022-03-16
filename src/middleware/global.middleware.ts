export default function (req, res, next) {
  console.log(`全局函数式: 进入`);
  next();
  console.log(`全局函数式: 退出`);
}
