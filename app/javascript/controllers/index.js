// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import DocumentController from "./document_controller"
application.register("document", DocumentController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import SubmitFormController from "./submit_form_controller"
application.register("submit-form", SubmitFormController)
