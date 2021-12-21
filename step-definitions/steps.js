import { Given, When, Then } from '@cucumber/cucumber';
import pressReturnKey from '../helper/actions/pressReturnKey';
import enterInput from '../helper/actions/enterInput'
import clickOn from '../helper/actions/clickOn';
import doubleClickOn from '../helper/actions/doubleClickOn';
import editInput from '../helper/actions/editInput';
import getElement from '../helper/actions/getElement';
import getElements from '../helper/actions/getElements';
import TodosPage from '../pageobjects/Todos.page';
import TestDate from '../data/static-data.json';
import ConfigData from '../config/config-data.json'

let todos = [];
Given("I am on the todos home page", async()=>{
    await TodosPage.open(ConfigData.Path);
});

When("enter {string} as todos item", async(item)=>{
    await enterInput(TodosPage.todosInput, item);
    todos.push(item);
});

When ("press return key", async()=>{
    await pressReturnKey();
});

When("click on {string}", async (tab) => {
    await clickOn(await TodosPage.getTab(tab));
});

When("click on {string} todos radio", async(todosItem) => {
    const item = await TodosPage.getRadio(todosItem);
    await clickOn(item);
});

When("click on clear completed button", async() =>{
    await clickOn(TodosPage.clearCompletedButton);
});

When("click on select all todos", async() => {
    await clickOn(TodosPage.selectAll);
});

When("remove {string} item from todos list", async (item) => {
    await TodosPage.removeItem(item);
})

When("double click on {string} todos item", async(todosItem) => {
    await doubleClickOn(await TodosPage.getItem(todosItem));
});

When("edit todos item with {string}", async(addText) => {
    await editInput(addText);
    await pressReturnKey();
});

Then("verify todos item {string} is edited with {string}", async(todoItem, editedTodo) => {
    const editedItem = await getElement(`//label[contains(text(),'${todoItem}')]`); //$(`//label[contains(text(),'${todoItem}')]`);
    expect(await editedItem.getText()).toBe(`${editedTodo}`);
});

Then("verify the {string} is added in todos list", async(expectedAddedItem) => {
    const actualItemInList = await getElements(TodosPage.allTodos);//$$(TodosPage.allTodos);
    const totalItemsInList = await actualItemInList.length;
    expect(await actualItemInList[totalItemsInList-1].getText()).toBe(expectedAddedItem);  
});

Then("verify {string} in footer", async(footerCountText) => {
    const footerCount = await getElement(TodosPage.footerTodosCount)//$(TodosPage.footerTodosCount);
    expect(await footerCount.getText()).toBe(footerCountText);
});

Then("verify the todos page is loaded", async()=>{
    const todosHeader = await getElement(TodosPage.todosHeader);//$(TodosPage.todosHeader);
    const todosInput = await getElement(TodosPage.todosInput);//$(TodosPage.todosInput);
    const footers = await getElements(TodosPage.todosFooters);//$$(TodosPage.todosFooters);
    expect(todosHeader).toBeDisplayed();
    expect(todosInput).toBeDisplayed();
    expect(footers.length).toBe(3);
    expect(await footers[0].getText()).toBe(TestDate.footer1);
    expect(await footers[1].getText()).toBe(TestDate.footer2);
    expect(await footers[2].getText()).toBe(TestDate.footer3);
});

Then('verify footer links are not shown', async () => {
    const allTodoslink = await getElement(TodosPage.allTodosLink);//$(TodosPage.allTodosLink);
    const activeTodoslink = await getElement(TodosPage.activeTodosLink);//$(TodosPage.activeTodosLink);
    const completedTodoslink = await getElement(TodosPage.completedTodosLink);//$(TodosPage.completedTodosLink);
    expect(allTodoslink).not.toBeDisplayed();
    expect(activeTodoslink).not.toBeDisplayed();
    expect(completedTodoslink).not.toBeDisplayed();
});

Then('verify footer links are shown', async () => {
    const allTodoslink = await getElement(TodosPage.allTodosLink);//$(TodosPage.allTodosLink);
    const activeTodoslink = await getElement(TodosPage.activeTodosLink);//$(TodosPage.activeTodosLink);
    const completedTodoslink = await getElement(TodosPage.completedTodosLink);//$(TodosPage.completedTodosLink);
    expect(allTodoslink).toBeDisplayed();
    expect(activeTodoslink).toBeDisplayed();
    expect(completedTodoslink).toBeDisplayed();
});

Then ("verify the title", async()=>{
    expect(await browser.getTitle()).toBe(TestDate.Title);
});

Then("verify {string} todos under {string} tab", async(count, tab) => {
    let todosActualCount = (await getElements(TodosPage.allTodos)).length;//(await $$(TodosPage.allTodos)).length;
    expect(todosActualCount).toBe(parseInt(count));
});

Then("verify clear completed button is shown", async() =>{
    // expect(await $(TodosPage.clearCompletedButton)).toBeDisplayed();
    expect(await getElement(TodosPage.clearCompletedButton)).toBeDisplayed();
});

Then("verify clear completed button is not shown", async() =>{
    // expect(await $(TodosPage.clearCompletedButton)).not.toBeDisplayed();
    expect(await getElement(TodosPage.clearCompletedButton)).not.toBeDisplayed();
});

Then("verify the order of the todos", async() => {
    const actualTododsOnPage = await getElements(TodosPage.allTodos);//$$(TodosPage.allTodos);
    for(let i=0; i<todos.length; i++){
        expect(await actualTododsOnPage[i].getText()).toBe(todos[i]);
    }
});

Then("verify the placeholder for the todos input", async() =>{
    // const placeholder = await (await $(TodosPage.todosInput)).getAttribute('placeholder');
    const placeholder = await (await getElement(TodosPage.todosInput)).getAttribute('placeholder');
    expect(placeholder).toBe(TestDate.placeholder)
});

Then("verify todos count {string} under {string} tab", async(count, tab) => {
    await clickOn(await TodosPage.getTab(tab));
    // expect(await $(TodosPage.allTodos).length).toBe(parseInt(count));
    expect(await getElements(TodosPage.allTodos).length).toBe(parseInt(count));
});

Then("verify {string} tab is not shown", async(tab) => {
    expect(await TodosPage.getTab(tab)).not.toBeDisplayed();
});

Then("verify style for {string} todos item should be {string}", async(todosItem, textStyle) => {
    const textDecoration = await (await TodosPage.getItem(todosItem)).getCSSProperty('text-decoration');
    expect(textDecoration.value).toContain(textStyle);
});

