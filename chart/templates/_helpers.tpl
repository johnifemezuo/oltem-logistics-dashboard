{{/*
Expand the name of the chart.
*/}}
{{- define "admin-dashboard.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "admin-dashboard.fullname" -}}
{{- if .Values.fullNameOverride }}
{{- .Values.fullNameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "admin-dashboard.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "admin-dashboard.labels" -}}
{{ include "admin-dashboard.selectorLabels" . }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "admin-dashboard.selectorLabels" -}}
app: {{ include "admin-dashboard.name" . }}
{{ toYaml .Values.app.labels }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "admin-dashboard.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "admin-dashboard.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Create the ConfigMap data base on the app environment
*/}}
{{- define "admin-dashboard.configData" }}
{{ $PATH := (printf "environments/%v/config-map.yaml" .Values.app.env) }}
{{ .Files.Get $PATH }}
{{- end }}
