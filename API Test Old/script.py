__all__ = ['script']

# Don't look below, you will not understand this Python code :) I don't.

from js2py.pyjs import *
# setting scope
var = Scope( JS_BUILTINS )
set_global_object(var)

# Code follows:
var.registers(['test'])
@Js
def PyJsHoisted_test_(name, this, arguments, var=var):
    var = Scope({'name':name, 'this':this, 'arguments':arguments}, var)
    var.registers(['name'])
    var.get('console').callprop('log', ((Js('Hello,')+var.get('name'))+Js('!')))
PyJsHoisted_test_.func_name = 'test'
var.put('test', PyJsHoisted_test_)
pass
pass


# Add lib to the module scope
script = var.to_python()