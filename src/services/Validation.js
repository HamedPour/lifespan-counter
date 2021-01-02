/*
  Note to viewer
    I would normally validate a vue form in its own component
    or even better setup a proper validation plugin.
    However, for Mr Techy and for pure fun I have decided to do
    validation this way.
*/

export default {
  validator(userDate) {
    /**
     *  Basic input checker
     * 
     *  Input: object with 4 int elements.
     *  Output: object with 2 elements. A boolean and a string.
     * 
     *  Functionality:
     *  1. Make sure that all values are Numbers.
     *  2. Make sure that each date is within is correct range.
     *  3. (later) Make sure that dates dont result in negative counter.
     *  4. (later) Parse string months into numbers.
     */
    const response = {
      errorMessage: null,
      isValid: true,
    };
    // check to make sure all inputs are numbers
    if (Number.isNaN(userDate.day)
        || Number.isNaN(userDate.month)
        || Number.isNaN(userDate.year)
        || Number.isNaN(userDate.lifespan)) {
      response.errorMessage = 'All dates must be in numbers - Thank you';
      response.isValid = false;
      return response;
    }
    // for days >> only allow numbers between 1 and 31 inclusive to pass
    if (userDate.day < 1 || userDate.day > 31) {
      response.errorMessage = 'Days must be between 1 and 31';
      response.isValid = false;
      return response;
    }
    // for months >> only allow numbers beween 1 and 12 inclusive to pass
    if (userDate.month < 1 || userDate.month > 12) {
      response.errorMessage = 'Months must be between 1 and 12';
      response.isValid = false;
      return response;
    }
    // for years >> only allow numbers from 1950 above pass
    if (userDate.year < 1950) {
      response.errorMessage = 'Only years after 1950 are allowed';
      response.isValid = false;
      return response;
    }
    // for lifespan >> only allow number above 1
    if (userDate.lifespan < 1) {
      response.errorMessage = 'Life expectancy must be at least 1 year';
      response.isValid = false;
      return response;
    }
    return response;
  },
};
