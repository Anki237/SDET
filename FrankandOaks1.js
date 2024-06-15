///<reference types='@cypress/xpath'/>
///<reference types="Cypress"/>
describe('Frank and Oak', () => {
    it('Testsuit1,signup with valid data', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.visit('https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')
      cy.get('i[id="login-icon"]').click()
      cy.get('[id="to-sign-up"]').click()
      cy.get('#username-field').type('Ankita')
      cy.xpath('//input[@id="email-field"]').type('rajeshvermacil@gmail.com')
      cy.get('#pwd-field').type('ruchiverma@14')
      cy.get('#signup-button-2').click()
      cy.on('window:alert',(msg1)=>{
        expect(msg1).to.eq('Username is already registered!')
         return true;
       })

    });
    it('Testsuit2,signup with invalid credential', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        cy.visit('https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')
      cy.get('i[id="login-icon"]').click()
      cy.get('[id="to-sign-up"]').click()
      cy.get('#username-field').type('Ankita*')
      cy.xpath('//input[@id="email-field"]').type('rajeshvermacil@')//invalid email id
      cy.get('#pwd-field').type('ruchiverma@14')
      cy.get('#signup-button-2').click()
    });
    it('Testsuit3,login with invalid data', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        cy.visit('https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')
        cy.get('#login-icon').click()
        cy.get('#username-siginup-field').type('Ankita@1234')//not registered user name
        cy.get('#pwd-signup-field').type('ruchiverma@14')
        cy.get('#signup-button').click()
        cy.on('window:alert',(msg2)=>{
            expect(msg2).to.eq('Please sign up first')
        })
    });
    it('Testsuit4,addicon', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        cy.visit('https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')
        cy.get('i[id="login-icon"]').click()
        cy.get('#username-siginup-field').type('Ankita')
        cy.get('#pwd-signup-field').type('ruchiverma@14')
        cy.get('#signup-button').click()
        cy.on('window:alert',(msg3)=>{
       expect(msg3).to.eq('Login successful')
        return true;
      })
      cy.get("#redirection-product").click()
      cy.xpath('(//button[@class="add-to-cart"])[9]').click();
      cy.go('back')
      cy.url().should('include','https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')
      cy.get('#cart-icon').click()
      cy.xpath('(//div[@id="size-plus-minus"]/span[text()="+"])[1]').click()
      cy.xpath('(//div[@id="size-plus-minus"]/span[text()="+"])[1]').click()
      //cy.xpath('(//div[@id="size-plus-minus"]/span[text()="+"])[1]').click()
      //cy.xpath('(//div[@id="size-plus-minus"]/span[text()="+"])[1]').click()
    });
    it('Testsuit5,checkout', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        cy.visit('https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')
        cy.get('#login-icon').click()
        cy.get('#username-siginup-field').type('Ankita')
        cy.get('#pwd-signup-field').type('ruchiverma@14')
        cy.get('#signup-button').click()
        cy.get("#redirection-product").click()
        cy.xpath('(//button[@class="add-to-cart"])[9]').click();
        cy.go('back')
        cy.get('#cart-icon').click()
        cy.go('forward')
        //cy.get("#redirection-product").click()
        cy.url().should('include','https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/product')
        cy.xpath('(//button[@class="add-to-cart"])[16]').click();
        cy.xpath('(//button[@class="add-to-cart"])[12]').click();
        cy.xpath('(//button[@class="add-to-cart"])[11]').click();
        cy.xpath('(//button[@class="add-to-cart"])[14]').click();
        cy.go('back')
        cy.get('#cart-icon').click()
        cy.get('#cart-container-button').click().should('have.id','cart-container-button')
        cy.url().should('include','https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')
    });
    it('Testsuit6, verify all clickable icon', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        cy.visit('https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')
        cy.get('i[id="login-icon"]').click()
        cy.get('[id="to-sign-up"]').click()
        cy.get('#username-field').type('Ankita',{force:true})
        cy.xpath('//input[@id="email-field"]').type('rajeshvermacil@gmail.com')
        cy.get('#pwd-field').type('ruchiverma@14')
        cy.get('#signup-button-2').click()
        cy.get('#login-icon').click()
        cy.get('#username-siginup-field').type('Ankita',{force:true});
        cy.get('#pwd-signup-field').type('ruchiverma@14',{force:true})
        cy.get('#signup-button').click({force:true}) 
        cy.xpath("(//span[text()='Women'])[1]").click()//women in navigation bar
        cy.xpath("(//span[text()='Men'])[1]").click()//men in navigation bar
        cy.xpath("(//span[text()='Sale'])[1]").click()//sale
        cy.get('i[class="fa-solid fa-truck-fast"]').click()//freeshipping icon
        cy.get('i[class="fa-solid fa-arrow-rotate-right"]').click()//free return
        cy.get('i[class="fa-solid fa-tags"]').click()//earn points
        cy.get('i[class="fa-regular fa-credit-card"]').click//buy now pay later
        cy.wait(3000)
        cy.url().should('include','https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')
        //same url then clickable elements are not working
        cy.get('#close-icon-signup').click()
    });
    it.only('Testsuit7, verify all clickable icon in footer', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      cy.visit('https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')
      cy.get('i[id="login-icon"]').click()
      cy.get('[id="to-sign-up"]').click()
      cy.get('#username-field').type('Ankita',{force:true})
      cy.xpath('//input[@id="email-field"]').type('rajeshvermacil@gmail.com')
      cy.get('#pwd-field').type('ruchiverma@14')
      cy.get('#signup-button-2').click()
      cy.get('#login-icon').click()
      cy.get('#username-siginup-field').type('Ankita',{force:true});
      cy.get('#pwd-signup-field').type('ruchiverma@14',{force:true})
      cy.get('#signup-button').click({force:true}) 
      cy.get('#close-icon-signup').click()
      cy.scrollTo(0,5000)
      cy.xpath("//div[text()='Our Story']").click()//our story
      cy.xpath("//div[text()='Discover']").click()//discover
      cy.xpath("//div[text()='Customer Care']").click()//customer care
      cy.xpath("//div[text()='Stay in touch']").click()//stay in touch
      cy.get('input[placeholder="Email"]').type('rajeshvermacil@gmail.com')
      cy.get('input[placeholder="First Name"]').type('Ankita')
      cy.xpath('(//input[@type="radio"])[1]').check().should('be.checked')
      cy.xpath('//button[text()="Subscribe"]').click()
      cy.url().should('include','https://6641c4a6f60fc17bdb89b7db--cheery-genie-3d5d23.netlify.app/')

    });
    
  });
  