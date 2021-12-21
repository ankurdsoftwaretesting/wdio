import clickOn from "../helper/actions/clickOn";
import enterInput from "../helper/actions/enterInput";

class TodosPage {
    
    get allTodosLink() {return '=All'}
    get activeTodosLink() {return '=Active'}
    get completedTodosLink() {return '=Completed'}
    get clearCompletedButton() {return '.clear-completed'}
    get footerTodosCount() {return '.todo-count'}
    get todosInput() {return 'input'}
    get todosHeader() {return 'h1'}
    get todosFooters() {return '//footer/p'}
    get allTodos() {return '//li//label'}
    get selectAll() {return '//ul[@class="todo-list"]/preceding-sibling::label'}

    async open(path){
        await browser.url(path);
    }
    
    async getTab(tab){
        return await $(`=${tab}`)
    }

    async selectTab(tab){
        await clickOn(`=${tab}`)
    }

    async getItem(item){
        return await $(`//label[text()="${item}"]`);
    }

    async getRadio(todosItem){
        return await $(`//label[text()="${todosItem}"]/preceding-sibling::input`);
    }

    async completeTodos(todosItem){
        await clickOn(`//label[text()="${todosItem}"]/preceding-sibling::input`);
    }

    async removeItem(item){
        await (await $(`//label[text()="${item}"]`)).moveTo();
        await (await $(`//label[text()="${item}"]/following-sibling::button`)).click();
    }

}

export default new TodosPage()