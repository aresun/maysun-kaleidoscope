// # timer
let timer_nextExecution = null;
let timer_clearInitialExeStatus = null;
// # flag
let is_initialOpr_executed = false;

export function single_debounce(fn, frequencySpace) {
  return function () {
    // $ record context
    const that = this;
    const fn_args = arguments;

    if (!is_initialOpr_executed) {
      // • call debounced fn
      fn.apply(that, fn_args);

      // • process initial opr flag
      is_initialOpr_executed = true;

      // if next opr more thatn frequency spave, clear initial sentienl
      timer_clearInitialExeStatus = setTimeout(() => {
        is_initialOpr_executed = false;
      }, frequencySpace);

      return;
    }

    // $ cancel last record
    if (timer_nextExecution) {
      clearTimeout(timer_nextExecution);
    }

    // $ if next opr is less than frequencySpace,
    // no need to reset initialOprExecuted
    if (timer_clearInitialExeStatus) {
      clearTimeout(timer_clearInitialExeStatus);
      timer_clearInitialExeStatus = null;
    }

    // $ set timer record
    timer_nextExecution = setTimeout(() => {
      fn.apply(that, fn_args);
      timer_nextExecution = null;
      is_initialOpr_executed = false;
    }, frequencySpace);
  };
}
