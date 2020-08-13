# JavaScript-Only Salesforce DXP www.com Site Example

![Status](https://img.shields.io/badge/status-Beta-yellowgreen)
![Geography](https://img.shields.io/badge/Geography-US-blue)

This sample Salesforce DX (SFDX) repo contains a working Salesforce Digital Experience Platform (Communities) www.com site built entirely with JavaScript via [Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) and the new [Custom Lightning Web Component Template for DXP](https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_networks_developers_lwc.htm).

This repository showcases not just Communities new DX-friendly metadata format but the Lightning Web Runtime-powered template that represents a huge performance and dev experience shift forward for the platform.

# Prereqs

In order to use this app, you'll need to ensure that you have...

* A Salesforce dev org
* Knowledge of SFDX
* Some JavaScript skills

# Setup

## Configure Salesforce

You'll need to create a dev org and set up My Domain, Commnuities, and enable both the ExperienceBundle metadata and LWC-only Template in `Community Settings` from the Setup menu.

# Deploy

Use SFDX, once connected to your Dev org's Dev Hub to deploy the source. The packaged LWC is built entirely with vanilla JS, HTML, and CSS powered by the static resources included in the repo.

# Etc.

Created with love by Frank Caron.
