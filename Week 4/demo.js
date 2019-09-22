//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log("Lab 04 startup code");//log in developer tools


function CalculateCommission()
{
    var topCommission = 0;
    var topSalesPerson = "Nobody yet";
    var SalesPeople = ["Brad", "Nila", "Joseph", "Kesh", "Lydia", "Devon", "Miller"];
    var DecSales = [1500, 15000, 30000, 12000, 45000, 25000, 8000];
    var JanSales = [10000, 25000, 20000, 14000, 30000, 16000, 30000];
    var FebSales = [8000, 7500, 45000, 10000, 38000, 22000, 15000];
    var TotalCommission = 0;
    var commission = 0;
    var AvgOld = [];
    var AverageSales = 0;
    var TotalSales = 0;
    var avgcommission = 0;
    
    console.log("Sales Person   Commission  Average Commission");
    console.log("----------------------------------------------------------");

    for (i = 0; i <= 6; i++) 
    { 
        TotalSales = DecSales[i] + JanSales[i] + FebSales[i];
        AvgOld[i] = TotalSales / 3;

        if(AvgOld[i] > AverageSales){
            AverageSales = AvgOld[i];
            topSalesPerson = SalesPeople[i];
        }

        if (TotalSales > 30000){
            commission = TotalSales * 0.08; 
        }
        else if(TotalSales > 15000) {
            commission = TotalSales * 0.05; 
        }
        else if(TotalSales > 10000){
            commission = TotalSales * 0.03;
        }
        else if (TotalSales > 5000){
            commission = TotalSales * 0.02;
        }
        else{
            commission = TotalSales * 0.01;
        }

        if(commission > topCommission){
            topCommission = commission;
        }
        avgcommission = commission / 3;

        console.log(SalesPeople[i] + "    " + commission + "  " + avgcommission);

            
    }    
    //alert("Top Average " + topSalesPerson + " " + AverageSales);
    console.log("----------------------------------------------------------");

    alert("Top Salesperson is "+ topSalesPerson + " and top commission amount is $" + topCommission );
    console.log("Top Salesperson is "+ topSalesPerson + " and top commission amount is $" + topCommission );
    console.log("----------------------------------------------------------");

   

    //Your code goes here
    /*
    Here's the pseudocode in case you are wondering how to get started:

    1. Save salesperson names in an array

    2. Save December sales amount in an array

    3. Save January sales amount in an array

    4. Save February sales amount in an array

    5. In a "For" loop, for each person

        Calculate Total sales = December sale + January sale + February sale
        
        Calculate commission: 
        if (total sales > 30000)
            commission = total sales * 0.08 
        If (total sales > 15000) .....etc
        Continue the if condition for the remaining as specified in the requirement for commission %
        
        Calculate average commission:
        Avg commission = Total commission / 3
        Display sales person name, commission and average commission
        Store the commission to a "topCommission" variable.
        Each time compare topCommission to commission of current salesperson to determine if this is the top commission

    6. Outside the "For" loop, display topCommission and topSalesperson name.
*/
    
    //alert("Top Salesperson is "+ topSalesPerson + "and top commission amount is $" + topCommission  );
   
}