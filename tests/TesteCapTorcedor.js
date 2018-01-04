module.exports = {
  'Fluxo Captorcedor - Passo 1' : function (browser) {
    browser
      .maximizeWindow()
      .url('http://fluxodecompradev.caixaseguros.intranet/Paginas/Captorcedor.aspx')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .click('button[id=btnAvancarPasso2Novo]')
      .assert.containsText('#dvIdentificacaoCliente', 'IDENTIFICAÇÃO DO CLIENTE')
  },

  'Fluxo Captorcedor - Passo 2' : function (browser) {
    browser
      .setValue('input[id=nomeLocatario]', 'João das Neves')
      .setValue('input[id=cpfLocatario]', '10020030088')
      .setValue('input[id=nascimentoLocatario]', '13051993')
      .click('select[id="ctl00_ctl55_g_df0cb8df_1a38_4df9_afef_7ff89dfeb87c_ddlProfissaoLocatario"] option[value="126"]')
      .click('select[id="ddlRendaIndividualLocatario"] option[value="4"]')
      .click('select[id="ddlRendaFamiliarLocatario"] option[value="5"]')
      .click('select[id="ddlEstadoCivilLocatario"] option[value="1"]')
      .click('select[id="ctl00_ctl55_g_df0cb8df_1a38_4df9_afef_7ff89dfeb87c_ddlSexoLocatario"] option[value="M"]')
      .setValue('input[id=cepLocatario]', '60150160')
      .keys('\uE004') //Retira o foco do campo CPF para realizar a consulta no serviço
      .pause(2000) // Pausa dois segundos para continuar após a consulta de CEP
      .setValue('input[id=complementoLocatario]', 'Apartamento 25')
      .setValue('input[id=dddCelularLocatario]', '85')
      .setValue('input[id=telefoneCelularLocatario]', '986804545')
      .setValue('input[id=emailFisicaLocatario]', 'testqa@outlook.com.br')
      .click('input[id=rbDesejaReceberCelularNao]')
      .click('input[id=rbDesejaReceberEmailNao]')
      .pause(1000)
      .click('button[id=btnAvancarPasso3Novo]')
      .pause(1500)
      .assert.containsText('.divCampo', 'Forma de pagamento:')
      //.end();
  }

  //..'Fluxo Captorcedor - Passo 3' : function (browser) {
  	// body...
  
}; 