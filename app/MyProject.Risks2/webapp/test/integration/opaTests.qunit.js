sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'MyProject/Risks2/test/integration/FirstJourney',
		'MyProject/Risks2/test/integration/pages/RisksList',
		'MyProject/Risks2/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('MyProject/Risks2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);