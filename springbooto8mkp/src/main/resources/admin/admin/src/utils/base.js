const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooto8mkp/",
            name: "springbooto8mkp",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooto8mkp/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生成绩管理系统"
        } 
    }
}
export default base
