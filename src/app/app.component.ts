import { Component } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //public pieChartLabels: string[] = ["$0", "$0"];
  //public pieChartLabels1: string[] = ["$0", "$0", "$0", "$0"];
  public pieChartData: number[] = [];
  public pieChartData1: number[] = [];
  public pieChartType: string = 'pie';

  public pieChartColor = [{
    backgroundColor: [
      "#FF4136", "#DCDCDC"
    ]
  }];

  public pieChartColor1 = [{
    backgroundColor: [
      "#9EC0E3", "#93D454", "#FF4136", "#DCDCDC",
    ]
  }];

  public pieChartOption: any = {};
  public pieChartOption1: any = {};


  // 2016 K-1 Tax Estimator section calculation
  public Estimated_Taxable_Income_model: number = 500000;
  public Investment_Amount_K1_model: number = 0;
  public Filing_Status: number = -1;
  public data = [];

  public Tax_Bracket: number = 0;
  public Tax_Bracket_K1: number = 0;
  public Estimated_Tax_Due: number = 0;
  public Deduction_K1: number = 0;
  public Adjusted_Taxable_Income: number = 0;
  public Adjusted_Taxable_Income_K1: number = 0;

  public After_Tax_Income: number = 0;
  public After_Tax_Income_K1: number = 0;

  public Tax_Rate_Pay_Tax: number = 0;
  public Tax_Rate_Pay_Tax_K1: number = 0;

  public Range_Start: number = 0;
  public Excess_Income: number = 0;
  public Excess_Income_K1: number = 0;
  public Tax_On_Excess: number = 0;
  public Tax_On_Excess_K1: number = 0;
  public Estimated_Tax_Due_K1: number = 0;
  public Adjusted_Net_Income: number = 0;
  public Adjusted_Net_Income_K1: number = 0;
  public Tax_Savings_K1: number = 0;
  public Tax_Liability: number = 0;
  public Tax_Liability_K1: number = 0;
  public Partnership_Investment: number = 0;
  public Income_Difference: number = 0;
  public k1_deduction_percentage: number = 75;
  public panel_visit: number = 0;

  public Actual_Dollars_At_Risk: number = 0;

  public costSaving: number = 0;

  constructor() {
    this.intializeData();
  }

  // Initialize the data[]
  intializeData() {
    this.data[0] = [{
      "range_start": 191650,
      "range_end": 416700,
      "percent_on_excess_k1": 33.0,
      "percent_on_excess": 33.0,
      "tax_rate_pay_tax_k1": 46643.75,
      "tax_rate_pay_tax": 46643.75
    },
    {
      "range_start": 416700,
      "range_end": 418400,
      "percent_on_excess_k1": 35.0,
      "percent_on_excess": 35.0,
      "tax_rate_pay_tax_k1": 120910.25,
      "tax_rate_pay_tax": 120910.25
    },
    {
      "range_start": 418400,
      "range_end": "Infinity",
      "percent_on_excess_k1": 39.6,
      "percent_on_excess": 39.6,
      "tax_rate_pay_tax_k1": 121505.25,
      "tax_rate_pay_tax": 121505.25
    }
    ];

    this.data[1] = [{
      "range_start": 153100,
      "range_end": 233350,
      "percent_on_excess_k1": 28,
      "percent_on_excess": 28,
      "tax_rate_pay_tax_k1": 29752.5,
      "tax_rate_pay_tax": 29752.5
    },
    {
      "range_start": 233350,
      "range_end": 416700,
      "percent_on_excess_k1": 33,
      "percent_on_excess": 33,
      "tax_rate_pay_tax_k1": 52222.5,
      "tax_rate_pay_tax": 52222.5
    },
    {
      "range_start": 416700,
      "range_end": 470700,
      "percent_on_excess_k1": 35,
      "percent_on_excess": 35,
      "tax_rate_pay_tax_k1": 112728,
      "tax_rate_pay_tax": 112728
    },
    {
      "range_start": 470700,
      "range_end": "Infinity",
      "percent_on_excess_k1": 39.6,
      "percent_on_excess": 39.6,
      "tax_rate_pay_tax_k1": 131628,
      "tax_rate_pay_tax": 131628
    }
    ];

    this.data[2] = [{
      "range_start": 116675,
      "range_end": 208350,
      "percent_on_excess_k1": 33,
      "percent_on_excess": 28,
      "tax_rate_pay_tax_k1": 26111.25,
      "tax_rate_pay_tax": 26111.25
    },
    {
      "range_start": 208350,
      "range_end": 235350,
      "percent_on_excess_k1": 35,
      "percent_on_excess": 33,
      "tax_rate_pay_tax_k1": 56364,
      "tax_rate_pay_tax": 56364
    },
    {
      "range_start": 235350,
      "range_end": "Infinity",
      "percent_on_excess_k1": 39.6,
      "percent_on_excess": 35,
      "tax_rate_pay_tax_k1": 65814,
      "tax_rate_pay_tax": 65814
    }
    ];

    this.data[3] = [{
      "range_start": 212500,
      "range_end": 416700,
      "percent_on_excess_k1": 33,
      "percent_on_excess": 28,
      "tax_rate_pay_tax_k1": 49816,
      "tax_rate_pay_tax": 26111.25
    },
    {
      "range_start": 416700,
      "range_end": 444550,
      "percent_on_excess_k1": 35,
      "percent_on_excess": 33,
      "tax_rate_pay_tax_k1": 117202.5,
      "tax_rate_pay_tax": 117202.5
    },
    {
      "range_start": 444550,
      "range_end": "Infinity",
      "percent_on_excess_k1": 39.6,
      "percent_on_excess": 35,
      "tax_rate_pay_tax_k1": 126950,
      "tax_rate_pay_tax": 126950
    }
    ];
  }

  // Get the selected value from the dropdown list
  getSelected(selectedValue: string) {
    this.Filing_Status = parseInt(selectedValue);
  }
  /* 
    commafy(num) {
      var str = num.toString().split('.');
      if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
      }
      if (str[1] && str[1].length >= 1) {
        str[1] = str[1].slice(0, 2);
      }
  
      if (!str[1]) {
        str[1] = '00';
      }
      return str.join('.');
    }
  
     */
  // Calculate the K1 with and without K1 value 
  compare_k1() {
    //this.pieChartLabels = [];
    this.pieChartData.length = 0;

    this.Deduction_K1 = this.Investment_Amount_K1_model * 0.75;
    this.Adjusted_Taxable_Income = this.Estimated_Taxable_Income_model;
    this.Adjusted_Taxable_Income_K1 = this.Estimated_Taxable_Income_model - this.Deduction_K1;

    for (var i = 0; i < this.data[this.Filing_Status].length; i++) {
      if (this.data[this.Filing_Status][i].range_start <= this.Adjusted_Taxable_Income && this.Adjusted_Taxable_Income <= this.data[this.Filing_Status][i].range_end) {
        this.panel_visit = 1;

        this.Tax_Bracket = this.data[this.Filing_Status][i].percent_on_excess / 100;
        this.Tax_Bracket_K1 = this.data[this.Filing_Status][i].percent_on_excess_k1 / 100;
        this.Tax_Rate_Pay_Tax = this.data[this.Filing_Status][i].tax_rate_pay_tax;
        this.Tax_Rate_Pay_Tax_K1 = this.data[this.Filing_Status][i].tax_rate_pay_tax_k1;
        this.Range_Start = this.data[this.Filing_Status][i].range_start;

        break;
      }
    }

    this.Excess_Income = this.Adjusted_Taxable_Income - this.Range_Start;
    this.Tax_On_Excess = this.Excess_Income * (this.Tax_Bracket);
    this.Estimated_Tax_Due = this.Tax_On_Excess + this.Tax_Rate_Pay_Tax;
    this.Adjusted_Net_Income = this.Adjusted_Taxable_Income - this.Estimated_Tax_Due;
    this.Tax_Liability = this.Estimated_Tax_Due;


    var per1 = ((this.Adjusted_Net_Income * 100) / this.Adjusted_Taxable_Income).toFixed(2);
    var per2 = ((this.Tax_Liability * 100) / this.Adjusted_Taxable_Income).toFixed(2);

    //var val1 = this.commafy(this.Tax_Liability);
    //var val2 = this.commafy(this.Adjusted_Net_Income);
    this.pieChartData.push(parseFloat(per2), parseFloat(per1));
    //this.pieChartLabels.push("$" + val1, "$" + val2)


    var options = {
      /* 
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  var allData = data.datasets[tooltipItem.datasetIndex].data;
                  var tooltipLabel = data.labels[tooltipItem.index];
                  var tooltipData = allData[tooltipItem.index];
                  var total = 0;
                  for (var i in allData) {
                    total += allData[i];
                  }
                  return tooltipData + '%';
                }
              }
            },
       */
      events: false,
      responsive: true,
      legend: {
        display: false,
      },
      animation: {
        duration: 500,
        easing: "easeOutQuart",
        onComplete: function () {
          var ctx = this.chart.ctx;
          Chart.defaults.global.defaultFontSize = 14;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset) {

            for (var i = 0; i < dataset.data.length; i++) {
              var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = '#fff';
              //if (i == 3) { // Darker text color for lighter background
              //  ctx.fillStyle = '#444';
              //}
              //var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
              ctx.fillText(dataset.data[i] + "%", model.x + x, model.y + y + 5);
              // Display percent in another line, line break doesn't work for fillText
              //ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }

    this.pieChartOption = options;
  }

  // Calculate the K1 with value
  compare_k2() {
    //this.pieChartLabels1 = [];
    this.pieChartData1.length = 0;

    if (this.panel_visit == 1) {
      this.Deduction_K1 = this.Investment_Amount_K1_model * (this.k1_deduction_percentage / 100);
      this.Adjusted_Taxable_Income_K1 = this.Estimated_Taxable_Income_model - this.Deduction_K1;

      for (var i = 0; i < this.data[this.Filing_Status].length; i++) {
        if (this.data[this.Filing_Status][i].range_start <= this.Adjusted_Taxable_Income_K1 && this.Adjusted_Taxable_Income_K1 <= this.data[this.Filing_Status][i].range_end) {
          this.Tax_Bracket_K1 = this.data[this.Filing_Status][i].percent_on_excess_k1 / 100;
          this.Tax_Rate_Pay_Tax_K1 = this.data[this.Filing_Status][i].tax_rate_pay_tax_k1;
          this.Range_Start = this.data[this.Filing_Status][i].range_start;
        }
      }

      this.Excess_Income_K1 = this.Adjusted_Taxable_Income_K1 - this.Range_Start;
      this.Tax_On_Excess_K1 = this.Excess_Income_K1 * (this.Tax_Bracket_K1);
      this.Estimated_Tax_Due_K1 = this.Tax_On_Excess_K1 + this.Tax_Rate_Pay_Tax_K1;
      this.Adjusted_Net_Income_K1 = this.Adjusted_Taxable_Income_K1 - this.Estimated_Tax_Due_K1;
      this.Tax_Savings_K1 = this.Estimated_Tax_Due - this.Estimated_Tax_Due_K1;
      this.Tax_Liability_K1 = this.Estimated_Tax_Due_K1;
      this.Partnership_Investment = this.Investment_Amount_K1_model;
      this.Income_Difference = this.Adjusted_Net_Income - this.Adjusted_Net_Income_K1;
      this.Actual_Dollars_At_Risk = this.Investment_Amount_K1_model - this.Income_Difference;

      var total = this.Adjusted_Net_Income_K1 + this.Tax_Liability_K1 + this.Tax_Savings_K1 + this.Income_Difference;

      var per1 = ((this.Adjusted_Net_Income_K1 * 100) / total).toFixed(2);
      var per2 = ((this.Tax_Liability_K1 * 100) / total).toFixed(2);
      var per3 = ((this.Tax_Savings_K1 * 100) / total).toFixed(2);
      var per4 = ((this.Income_Difference * 100) / total).toFixed(2);

      //var val1 = this.commafy(this.Income_Difference);
      //var val2 = this.commafy(this.Tax_Savings_K1);
      //var val3 = this.commafy(this.Tax_Liability_K1);
      //var val4 = this.commafy(this.Adjusted_Net_Income_K1);

      this.pieChartData1.push(parseFloat(per4), parseFloat(per3), parseFloat(per2), parseFloat(per1));
      //this.pieChartLabels1.push("$" + val1 + "                             ", "$" + val2 + "                             ", "$" + val3 + "                                  ", "$" + val4 + "                                ")
      //this.pieChartLabels1.push("$" + val1, "$" + val2, "$" + val3, "$" + val4);

      var percent = (100 - ((this.Actual_Dollars_At_Risk * 100) / this.Investment_Amount_K1_model)).toFixed(2)
      this.costSaving = parseFloat(percent) / 100;

      var options = {
        /* 
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    for (var i in allData) {
                      total += allData[i];
                    }
                    return tooltipData + '%';
                  }
                }
              },
         */
        responsive: true,
        legend: {
          display: false,
        },
        events: false,
        animation: {
          duration: 500,
          easing: "easeOutQuart",
          onComplete: function () {
            var ctx = this.chart.ctx;
            Chart.defaults.global.defaultFontSize = 14;
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset) {

              for (var i = 0; i < dataset.data.length; i++) {
                var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                  total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                  mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                  start_angle = model.startAngle,
                  end_angle = model.endAngle,
                  mid_angle = start_angle + (end_angle - start_angle) / 2;

                var x = mid_radius * Math.cos(mid_angle);
                var y = mid_radius * Math.sin(mid_angle);

                ctx.fillStyle = '#fff';
                //if (i == 3) { // Darker text color for lighter background
                //  ctx.fillStyle = '#444';
                //}
                //var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
                ctx.fillText(dataset.data[i] + "%", model.x + x + 5, model.y + y + 7);
                // Display percent in another line, line break doesn't work for fillText
                //ctx.fillText(percent, model.x + x, model.y + y + 15);
              }
            });
          }
        }
      }

      console.log(options);

      this.pieChartOption1 = options;
    }
  }

  // Changing the Panel Icon
  onclicktoggle(idname: string) {
    let icon = "";
    if (idname === "accordion1") {
      icon = "icon1";
    }

    let cN = document.getElementById(icon).className;

    if (icon === "icon1") {
      if (cN === "glyphicon glyphicon-plus") {
        document.getElementById(icon).className = "glyphicon glyphicon-minus";
      }
      else {
        document.getElementById(icon).className = "glyphicon glyphicon-plus";
      }
    }
  }
}