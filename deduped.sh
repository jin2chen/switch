#!/usr/bin/env bash
awk '!a[$0]++' domain.tpl.ini | sort > domain.tpm
cat head.ini domain.tpm > domain.ini && mv domain.tpm domain.tpl.ini
