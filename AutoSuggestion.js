
describe('AutoSuggestion',()=>{

    it('Verify user can select value from auto-suggestion', async ()=>{
     
        //1. Launch hotels.com  

        await browser.url('https://hotels.com/');
        await browser.pause(2000);
        await browser.maximizeWindow();


        // 2. Enter 'new' in the destination

        await $('//*[@aria-label="Going to"]').click();
        await $('#destination_form_field').setValue('Newport');
        await browser.pause(3000);

        // 3. Select 'Newport Beach' from auto-suggestion.

        const autoSuggestionElements = await $$('//button[@data-stid="destination_form_field-result-item-button"]');
          

        for (const cities of autoSuggestionElements) {
             const cityValue = await cities.getAttribute('aria-label');
            
            if (cityValue.startsWith('Newport Beach')){
      
              await cities.click();
      
              break;
      
            }
            
          }
            await browser.pause(3000);
        
      
        

    })
})

