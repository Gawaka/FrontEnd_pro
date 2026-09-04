
describe('Сторінка додавання відмазок', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('1. є заголовок h1 на сторінці', () => {
    cy.get('h1').should('contain.text', '✨Додати відмазку');
  });

  it('2. Поле вводу приймає цифри, букви та символи', () => {
    const testString = 'Відмазка №42: Забув ключі!';
    cy.get('input[type="text"]')
      .type(testString)
      .should('have.value', testString);
  });

it('3. Помилка при спробі додати порожній інпут', () => {
    cy.contains('button', 'Додати').click();
    cy.get('input[type="text"]').then(($input) => {
      expect($input[0].validationMessage).to.not.be.empty;
    });
  });

  it('4. Успішно створює нову відмазку і додає її', () => {
    const newExcuseText = 'Кіт перегриз кабль інтернету!';

    cy.get('input[type="text"]').type(newExcuseText);
    cy.contains('button', 'Додати').click();
    cy.contains('.card-text', newExcuseText).should('be.visible');
    cy.get('input[type="text"]').should('have.value', '');
  });

  it('5. Збільшує лічильник лайків при натисканні на 👍', () => {
    const text = 'Відмазка для лайку';
    cy.get('input[type="text"]').type(text);
    cy.contains('button', 'Додати').click();
    cy.get('.likes').should('contain.text', '0');
    cy.contains('button', '👍').click();
    cy.get('.likes').should('contain.text', '1');
  });

  it('6. Видаляє відмазку зі списку при натисканні на ✕', () => {
    const text = 'Відмазка на видалення';
    cy.get('input[type="text"]').type(text);
    cy.contains('button', 'Додати').click();
    cy.contains('.card-text', text).should('be.visible');
    cy.contains('button', '✕').click();
    cy.contains('.card-text', text).should('not.exist');
  });
});