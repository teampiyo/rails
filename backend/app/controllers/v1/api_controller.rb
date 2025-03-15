# version 1 for api

# Define any kind of authentication or behaviors 
# inside APIController rather than ApplicationController
# because if you change your authentication mechanism
# between V1 and V2, it's controlled here not from ApplicationController
# So, only app-wide things go inside ApplicationController

module V1
    class APIController < ApplicationController
    end
end


# UsersController => users_controller
# ApiController => api_controller (APIController) -> config > initializers > inflection (change that)