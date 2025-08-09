/**
 * @file CSFIPAT.js
 * @author Ragnarokkr
 * @version 1.0
 * @license CC BY-NC-SA 4.0
 * @description A novel Chrono-Spatial Framework for Italian Public Administration Timelines (CSFIPAT)
 */

const CSFIPAT = {
  /**
   * Defines the core values and factors used in the CSFIPAT algorithm.
   */
  values: {
    // Messina Strait Epoch (MSE)
    T_start: 1866, // Year of the first official Italian government task
    T_reference: 2025, // Current reference year
    Y_mean: 10, // Assumed mean completion time for a macro public engineering opera (in years)

    // Travel Spatial Component (TSC)
    L_SS16: 1000.67, // Length of Strada Statale 16 (in km)
    V_walk: 5, // Mean walking speed (in km/h)
    H_workday: 8, // Standard workday (in hours)

    // Coffee Machine Chrono-Spatial Factor (F_CM)
    P_coffee: 0.7, // Estimated mean percentage of people drinking coffee
    T_prep: 300, // Mean time to prepare a coffee (in seconds)
    V_walk_office: 1.388888888888889, // Mean walking speed of an office worker (in m/s)

    // Cigarette Time Correction Factor (F_Cig)
    T_smoke: 5, // Mean time to smoke a single cigarette (in minutes)
    N_smokes: 12, // Mean number of cigarettes smoked daily by an adult
    P_smokers: 0.24, // Estimated mean percentage of employees who smoke
    T_workday_minutes: 480, // 8-hour workday in minutes

    // Non-Operational Days Factor (F_NOD)
    H_national: 11, // Number of national holidays in Italy
    W_days: 104, // Number of weekend days in a year (52 weeks * 2 days)
    T_vacation: 26, // Number of paid vacation days per employee per year
    H_regional: 2, // Correction value for regional holidays and other local non-working days
    N_working_days_year: 365.25, // Total number of days in a year
  },

  /**
   * Calculates the Messina Strait Temporal Factor (F_MSE).
   * @returns {number} The Messina Strait Temporal Factor.
   */
  calculateFMSE: function () {
    const T_MSE = this.values.T_reference - this.values.T_start;
    return T_MSE / this.values.Y_mean;
  },

  /**
   * Calculates the Travel Spatial Factor (F_TSC).
   * @returns {number} The Travel Spatial Factor.
   */
  calculateFTSC: function () {
    const T_walk = this.values.L_SS16 / this.values.V_walk;
    return T_walk / this.values.H_workday;
  },

  /**
   * Calculates the Coffee Machine Chrono-Spatial Factor (F_CM).
   * @param {number} N_employees - The number of employees.
   * @param {number} L_queue - The queue length at the coffee machine.
   * @param {number} D_cm - The distance to the coffee machine (in meters).
   * @returns {number} The normalized Coffee Machine Chrono-Spatial Factor.
   */
  calculateFCM: function (N_employees, L_queue, D_cm) {
    const N_drinkers = N_employees * this.values.P_coffee;
    const F_delay_queue = L_queue + 1;
    const T_travel = 2 * D_cm;
    const F_delay_distance = 1 + T_travel / this.values.V_walk_office;
    const F_CM =
      N_drinkers * (this.values.T_prep * F_delay_queue + F_delay_distance);
    return F_CM / 3600; // Normalized to hours
  },

  /**
   * Calculates the Cigarette Time Correction Factor (F_Cig).
   * @param {number} N_employees - The number of employees.
   * @returns {number} The Cigarette Time Correction Factor.
   */
  calculateFCig: function (N_employees) {
    const T_loss_smoking =
      N_employees *
      this.values.P_smokers *
      ((this.values.N_smokes / 24) * 8) *
      this.values.T_smoke;
    return (
      this.values.T_workday_minutes /
      (this.values.T_workday_minutes - T_loss_smoking)
    );
  },

  /**
   * Calculates the Non-Operational Days Factor (F_NOD).
   * @returns {number} The Non-Operational Days Factor.
   */
  calculateFNOD: function () {
    const T_non_op =
      this.values.H_national +
      this.values.W_days +
      this.values.T_vacation +
      this.values.H_regional;
    const T_op = this.values.N_working_days_year - T_non_op;
    return this.values.N_working_days_year / T_op;
  },

  /**
   * Calculates the final project timeline in days and years using the CSFIPAT algorithm.
   * @param {number} D_base - The initial, optimistic estimate in days.
   * @param {number} N_employees - The number of employees.
   * @param {number} L_queue - The queue length at the coffee machine.
   * @param {number} D_cm - The distance to the coffee machine (in meters).
   * @returns {{days: number, years: number}} An object containing the final timeline in days and years.
   */
  calculateFinalTimeline: function (
    D_base,
    N_employees = 1,
    L_queue = 0,
    D_cm = 15
  ) {
    const F_MSE = this.calculateFMSE();
    const F_TSC = this.calculateFTSC();
    const F_CM = this.calculateFCM(N_employees, L_queue, D_cm);
    const F_Cig = this.calculateFCig(N_employees);
    const F_NOD = this.calculateFNOD();

    const D_final = D_base * F_MSE * F_TSC * F_CM * F_Cig * F_NOD;
    const T_final_years = D_final / this.values.N_working_days_year;

    return {
      days: D_final,
      years: T_final_years,
    };
  },
};

// Example usage:
// const D_base_example = 100;
// const timeline = CSFIPAT.calculateFinalTimeline(D_base_example);

// console.log(`Initial optimistic timeline: ${D_base_example} days`);
// console.log(`Final estimated timeline: ${timeline.days.toFixed(2)} days`);
// console.log(`Final estimated timeline: ${timeline.years.toFixed(2)} years`);
